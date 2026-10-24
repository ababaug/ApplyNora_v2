
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';

const root = process.cwd();
const designRoot = path.join(root, 'apps/web/design-assets/stitch_applynora_design_system');
const pagesRoot = path.join(root, 'apps/web/src/pages');
const publicRoot = path.join(root, 'apps/web/public');
const backupRoot = path.join(root, 'apps/web/.stitch-backups', new Date().toISOString().replace(/[:.]/g, '-'));
const dryRun = process.argv.includes('--dry-run');
const overwrite = process.argv.includes('--overwrite');

const pages = [
  ['applynora_home', 'HomePage', '/'],
  ['applynora_features', 'FeaturesPage', '/features'],
  ['applynora_how_it_works', 'HowItWorksPage', '/how-it-works'],
  ['applynora_pricing', 'PricingPage', '/pricing'],
  ['applynora_about', 'AboutPage', '/about'],
  ['applynora_contact', 'ContactPage', '/contact'],
  ['applynora_blog', 'BlogPage', '/blog'],
];

const routes = new Map([
  ['/', '/'],
  ['/index.html', '/'],
  ['/home', '/'],
  ...pages.flatMap(([slug, , route]) => [
    [`/${slug}`, route],
    [`/${slug}/code.html`, route],
    [route, route],
  ]),
]);

const voidTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr',
  'img', 'input', 'link', 'meta', 'param',
  'source', 'track', 'wbr',
]);

const boolAttrs = new Set([
  'disabled', 'checked', 'selected', 'multiple',
  'required', 'readOnly', 'autoFocus', 'hidden',
  'open', 'controls', 'loop', 'muted',
  'playsInline', 'noValidate', 'formNoValidate',
  'allowFullScreen', 'reversed', 'itemScope', 'capture',
]);

const attrMap = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  srcset: 'srcSet',
  crossorigin: 'crossOrigin',
  referrerpolicy: 'referrerPolicy',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
  charset: 'charSet',
  acceptcharset: 'acceptCharset',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-miterlimit': 'strokeMiterlimit',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'fill-opacity': 'fillOpacity',
  'stroke-opacity': 'strokeOpacity',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'xlink:href': 'xlinkHref',
  'xml:space': 'xmlSpace',
  'xmlns:xlink': 'xmlnsXlink',
};

const unitless = new Set([
  'opacity', 'zIndex', 'fontWeight', 'lineHeight',
  'flex', 'flexGrow', 'flexShrink', 'order',
  'zoom', 'gridRow', 'gridColumn', 'scale',
  'strokeWidth', 'fillOpacity', 'strokeOpacity',
]);

const camel = key =>
  key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

const safeText = s =>
  s.replace(/&/g, '&amp;')
   .replace(/\{/g, '&#123;')
   .replace(/\}/g, '&#125;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;');

const isRemote = s =>
  /^(?:https?:|data:|blob:|\/\/|mailto:|tel:|#)/i.test(s);

const existsFile = p =>
  fs.existsSync(p) && fs.statSync(p).isFile();

function save(file, content) {
  if (existsFile(file)) {
    if (fs.readFileSync(file, 'utf8') === content) return;

    if (!overwrite && !dryRun) {
      throw Error(
        `Already exists: ${path.relative(root, file)} (use --overwrite)`
      );
    }

    if (!dryRun) {
      const backup = path.join(
        backupRoot,
        path.relative(root, file)
      );

      fs.mkdirSync(path.dirname(backup), {
        recursive: true,
      });

      fs.copyFileSync(file, backup);
    }
  }

  if (!dryRun) {
    fs.mkdirSync(path.dirname(file), {
      recursive: true,
    });

    fs.writeFileSync(file, content, 'utf8');
  }
}

function assetUrl(raw, ctx, fromDir = ctx.dir) {
  if (!raw || isRemote(raw) || raw.startsWith('/')) {
    return raw;
  }

  const match = /^([^?#]+)(.*)$/.exec(raw);
  if (!match) return raw;

  const src = path.resolve(
    fromDir,
    decodeURI(match[1])
  );

  const relative = path.relative(ctx.dir, src);

  if (
    relative === '..' ||
    relative.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relative)
  ) {
    ctx.warnings.push(
      `Asset outside page directory: ${raw}`
    );

    return raw;
  }

  if (!existsFile(src)) {
    ctx.warnings.push(`Missing asset: ${raw}`);
    return raw;
  }

  const publicPath =
    `stitch/${ctx.slug}/${relative.split(path.sep).join('/')}`;

  ctx.assets.set(
    src,
    path.join(publicRoot, ...publicPath.split('/'))
  );

  return `/${publicPath}${match[2]}`;
}

function srcSet(raw, ctx) {
  return raw.split(',').map(item => {
    const match = /^(\s*)(\S+)(\s+.*)?$/.exec(item);

    return match
      ? `${match[1]}${assetUrl(match[2], ctx)}${match[3] || ''}`
      : item;
  }).join(',');
}

function styleObject(style, node) {
  const el = node.ownerDocument.createElement('div');
  el.setAttribute('style', style);

  const obj = {};

  for (let i = 0; i < el.style.length; i++) {
    const cssName = el.style[i];

    const key = cssName.startsWith('--')
      ? cssName
      : camel(cssName.replace(/^-ms-/, 'ms-'));

    const value = el.style
      .getPropertyValue(cssName)
      .trim();

    const priority = el.style.getPropertyPriority(cssName);

    obj[key] = priority
      ? `${value} !important`
      : /^-?(?:\d+\.?\d*|\.\d+)$/.test(value) &&
        (value === '0' || unitless.has(key))
        ? Number(value)
        : value;
  }

  return obj;
}

function attrs(node, ctx, skipHref = false) {
  let out = '';

  for (const { name, value } of Array.from(node.attributes)) {
    const lower = name.toLowerCase();

    if (
      lower.startsWith('on') ||
      (skipHref && lower === 'href')
    ) {
      continue;
    }

    const key = attrMap[lower] ||
      (
        lower.startsWith('data-') ||
        lower.startsWith('aria-')
          ? lower
          : name
      );

    if (lower === 'style') {
      const style = styleObject(value, node);

      if (Object.keys(style).length) {
        out += ` style={${JSON.stringify(style)}}`;
      }

      continue;
    }

    if (
      lower === 'value' &&
      ['input', 'textarea', 'select'].includes(node.localName)
    ) {
      out += ` defaultValue={${JSON.stringify(value)}}`;
      continue;
    }

    if (
      lower === 'checked' &&
      node.localName === 'input'
    ) {
      out += ' defaultChecked';
      continue;
    }

    if (boolAttrs.has(key)) {
      if (
        node.hasAttribute(name) &&
        value !== 'false'
      ) {
        out += ` ${key}`;
      }

      continue;
    }

    const resolved = lower === 'srcset'
      ? srcSet(value, ctx)
      : ['src', 'poster'].includes(lower)
        ? assetUrl(value, ctx)
        : value;

    out += ` ${key}={${JSON.stringify(resolved)}}`;
  }

  return out;
}

function internalRoute(href) {
  if (
    !href ||
    isRemote(href) ||
    href.startsWith('#') ||
    href.startsWith('/#')
  ) {
    return null;
  }

  const match = /^([^?#]*)(.*)$/.exec(href);

  const normalized = `/${match[1]
    .replace(/^\.\//, '')
    .replace(/^\/+/, '')
    .replace(/\/$/, '')}`.toLowerCase();

  const route = routes.get(normalized);

  return route === undefined
    ? null
    : route + match[2];
}

function jsx(node, ctx) {
  if (node.nodeType === 3) {
    return safeText(node.textContent || '');
  }

  if (node.nodeType !== 1) {
    return '';
  }

  const tag = node.localName;

  if (
    ['script', 'style', 'noscript', 'template'].includes(tag)
  ) {
    return '';
  }

  const children = Array.from(node.childNodes)
    .map(n => jsx(n, ctx))
    .join('');

  if (tag === 'a') {
    const href = node.getAttribute('href');
    const route = internalRoute(href);
    const a = attrs(node, ctx, true);

    if (route !== null) {
      ctx.usesLink = true;

      return `<Link${a} to={${JSON.stringify(route)}}>${children}</Link>`;
    }

    return `<a${a}${
      href === null
        ? ''
        : ` href={${JSON.stringify(href)}}`
    }>${children}</a>`;
  }

  if (tag === 'textarea') {
    return `<textarea${attrs(node, ctx)} defaultValue={${
      JSON.stringify(node.textContent || '')
    }} />`;
  }

  if (tag === 'select') {
    ctx.warnings.push(
      'Check <select> defaultValue and option selection manually'
    );
  }

  const a = attrs(node, ctx);

  return voidTags.has(tag)
    ? `<${tag}${a} />`
    : `<${tag}${a}>${children}</${tag}>`;
}

function cssUrlRewrite(css, ctx, fromDir) {
  return css.replace(
    /url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/gi,
    (full, quote, value) =>
      `url(${quote}${assetUrl(value, ctx, fromDir)}${quote})`
  );
}

function collectCss(doc, ctx) {
  const blocks = [];

  for (const style of doc.querySelectorAll('style')) {
    if (style.textContent?.trim()) {
      blocks.push(
        cssUrlRewrite(style.textContent, ctx, ctx.dir)
      );
    }
  }

  for (
    const link of doc.querySelectorAll(
      'link[rel~="stylesheet"]'
    )
  ) {
    const href = link.getAttribute('href');

    if (!href) continue;

    if (isRemote(href)) {
      ctx.remoteCss.push(href);
      continue;
    }

    const file = path.resolve(
      ctx.dir,
      href.split(/[?#]/)[0]
    );

    if (existsFile(file)) {
      blocks.push(
        cssUrlRewrite(
          fs.readFileSync(file, 'utf8'),
          ctx,
          path.dirname(file)
        )
      );
    } else {
      ctx.warnings.push(
        `Missing stylesheet: ${href}`
      );
    }
  }

  return blocks.join('\n\n');
}

let failures = 0;

for (const [slug, component] of pages) {
  const dir = path.join(designRoot, slug);
  const file = path.join(dir, 'code.html');

  if (!existsFile(file)) {
    console.error(
      `MISSING ${path.relative(root, file)}`
    );

    failures++;
    continue;
  }

  try {
    const dom = new JSDOM(
      fs.readFileSync(file, 'utf8')
    );

    const doc = dom.window.document;
    const main = doc.querySelector('main');

    if (!main) {
      throw Error('No <main> found');
    }

    const ctx = {
      slug,
      dir,
      assets: new Map(),
      warnings: [],
      usesLink: false,
      remoteCss: [],
    };

    const content = jsx(main, ctx);
    const css = collectCss(doc, ctx);

    const title =
      doc.title.trim() ||
      `${component.replace(/Page$/, '')} | ApplyNora`;

    const description =
      doc.querySelector(
        'meta[name="description"]'
      )?.getAttribute('content') ||
      `${component.replace(/Page$/, '')} | ApplyNora`;

    const imports = [
      "import { Helmet } from 'react-helmet-async';",
    ];

    if (ctx.usesLink) {
      imports.push(
        "import { Link } from 'react-router-dom';"
      );
    }

    if (css) {
      imports.push(
        `import './${component}.css';`
      );
    }

    const remoteLinks = ctx.remoteCss
      .map(
        href =>
          `<link rel="stylesheet" href={${
            JSON.stringify(href)
          }} />`
      )
      .join('\n        ');

    const code = `${imports.join('\n')}

export function ${component}() {
  return (
    <>
      <Helmet>
        <title>{${JSON.stringify(title)}}</title>
        <meta
          name="description"
          content={${JSON.stringify(description)}}
        />
        ${remoteLinks}
      </Helmet>
      ${content}
    </>
  );
}
`;

    save(
      path.join(pagesRoot, `${component}.tsx`),
      code
    );

    if (css) {
      save(
        path.join(pagesRoot, `${component}.css`),
        css
      );
    }

    for (
      const [source, destination] of ctx.assets
    ) {
      if (
        existsFile(destination) &&
        !overwrite
      ) {
        ctx.warnings.push(
          `Existing asset unchanged: ${
            path.relative(root, destination)
          }`
        );

        continue;
      }

      if (!dryRun) {
        fs.mkdirSync(
          path.dirname(destination),
          { recursive: true }
        );

        fs.copyFileSync(
          source,
          destination
        );
      }
    }

    console.log(
      `${dryRun ? 'WOULD GENERATE' : 'GENERATED'} ` +
      `${component} (${ctx.assets.size} assets)`
    );

    for (const warning of ctx.warnings) {
      console.warn(`  WARN ${warning}`);
    }
  } catch (error) {
    failures++;

    console.error(
      `FAILED ${component}: ${error.message}`
    );
  }
}

if (failures) {
  console.error(
    `${failures} page(s) failed`
  );

  process.exitCode = 1;
}
