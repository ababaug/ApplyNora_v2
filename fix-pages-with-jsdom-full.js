
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';

const ROOT = process.cwd();
const DESIGN_ROOT = path.resolve(ROOT, 'apps/web/design-assets/stitch_applynora_design_system');
const OUTPUT_ROOT = path.resolve(ROOT, 'apps/web/src/pages');
const BACKUP_ROOT = path.resolve(ROOT, 'apps/web/.stitch-backups');

const PAGES = [
  ['applynora_home', 'HomePage', '/'],
  ['applynora_features', 'FeaturesPage', '/features'],
  ['applynora_how_it_works', 'HowItWorksPage', '/how-it-works'],
  ['applynora_pricing', 'PricingPage', '/pricing'],
  ['applynora_about', 'AboutPage', '/about'],
  ['applynora_contact', 'ContactPage', '/contact'],
  ['applynora_blog', 'BlogPage', '/blog'],
];

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const overwrite = args.has('--overwrite');
const noBackup = args.has('--no-backup');

const HTML_TO_REACT = new Map(Object.entries({
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
}));

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr',
  'img', 'input', 'link', 'meta', 'param',
  'source', 'track', 'wbr',
]);

const BOOLEAN = new Set([
  'disabled', 'checked', 'selected', 'multiple',
  'required', 'readOnly', 'autoFocus', 'hidden',
  'open', 'controls', 'loop', 'muted',
  'playsInline', 'noValidate', 'formNoValidate',
  'allowFullScreen', 'reversed', 'download',
]);

const UNIT_LESS = new Set([
  'opacity', 'zIndex', 'fontWeight', 'lineHeight',
  'flex', 'flexGrow', 'flexShrink', 'order',
  'zoom', 'gridRow', 'gridColumn', 'scale',
  'strokeWidth', 'fillOpacity', 'strokeOpacity',
]);

const routeAliases = new Map([
  ['/', '/'],
  ['/index.html', '/'],
  ['/home', '/'],
  ['/features', '/features'],
  ['/how-it-works', '/how-it-works'],
  ['/pricing', '/pricing'],
  ['/about', '/about'],
  ['/contact', '/contact'],
  ['/blog', '/blog'],
  ...PAGES.map(([slug, , route]) => [`/${slug}`, route]),
  ...PAGES.map(([slug, , route]) => [`/${slug}/code.html`, route]),
]);

function escapeJSXText(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toCamel(prop) {
  return prop.replace(
    /-([a-z])/g,
    (_, letter) => letter.toUpperCase()
  );
}

function parseStyle(style) {
  const result = {};
  const doc = new JSDOM('<div></div>').window.document;
  const el = doc.querySelector('div');

  el.setAttribute('style', style);

  for (let i = 0; i < el.style.length; i++) {
    const property = el.style[i];
    const raw = el.style.getPropertyValue(property).trim();

    const key = property.startsWith('--')
      ? property
      : toCamel(property.replace(/^-ms-/, 'ms-'));

    const numeric = /^-?(?:\d+\.?\d*|\.\d+)$/.test(raw);

    result[key] =
      numeric && (raw === '0' || UNIT_LESS.has(key))
        ? Number(raw)
        : raw;

    if (el.style.getPropertyPriority(property)) {
      result[key] = `${raw} !important`;
    }
  }

  return result;
}

function attrName(name) {
  const lower = name.toLowerCase();

  if (HTML_TO_REACT.has(lower)) {
    return HTML_TO_REACT.get(lower);
  }

  if (lower.startsWith('data-') || lower.startsWith('aria-')) {
    return name;
  }

  // Never execute inline HTML event-handler strings.
  if (lower.startsWith('on')) {
    return null;
  }

  return name;
}

function jsxAttrs(node, ctx) {
  let out = '';

  for (const attr of Array.from(node.attributes)) {
    const key = attrName(attr.name);
    if (!key) continue;

    let value = attr.value;

    if (key === 'style') {
      const styles = parseStyle(value);

      if (Object.keys(styles).length) {
        out += ` style={${JSON.stringify(styles)}}`;
      }

      continue;
    }

    if (key === 'href' && node.tagName.toLowerCase() === 'a') {
      continue;
    }

    if (key === 'src' || key === 'poster' || key === 'srcSet') {
      value = resolveAsset(value, ctx);
    }

    if (
      BOOLEAN.has(key) &&
      (value === '' || value.toLowerCase() === key.toLowerCase())
    ) {
      out += ` ${key}`;
    } else {
      out += ` ${key}={${JSON.stringify(value)}}`;
    }
  }

  return out;
}

function resolveAsset(value, ctx) {
  if (
    !value ||
    /^(?:https?:|data:|blob:|\/\/|#|mailto:|tel:)/i.test(value)
  ) {
    return value;
  }

  // Preserve existing absolute paths.
  if (value.startsWith('/')) {
    return value;
  }

  // srcSet requires additional processing if present.
  if (value.includes(',')) {
    return value;
  }

  const clean = value.split(/[?#]/)[0];
  const suffix = value.slice(clean.length);

  const source = path.resolve(ctx.pageDir, clean);

  const relativeSource = path.relative(ctx.pageDir, source);

  if (
    relativeSource === '..' ||
    relativeSource.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relativeSource)
  ) {
    ctx.warnings.push(`Asset outside design folder: ${value}`);
    return value;
  }

  if (
    !fs.existsSync(source) ||
    !fs.statSync(source).isFile()
  ) {
    ctx.warnings.push(`Asset not found: ${value}`);
    return value;
  }

  const rel = relativeSource.replace(/\\/g, '/');

  const destinationRel = path.posix.join(
    'stitch',
    ctx.slug,
    rel
  );

  ctx.assets.set(
    source,
    path.join(
      ROOT,
      'apps/web/public',
      ...destinationRel.split('/')
    )
  );

  return `/${destinationRel}${suffix}`;
}

function linkTarget(href) {
  if (
    !href ||
    /^(?:https?:|\/\/|mailto:|tel:|javascript:|data:)/i.test(href)
  ) {
    return null;
  }

  // Keep same-page anchor navigation.
  if (href.startsWith('#')) {
    return null;
  }

  const match = href.match(/^([^?#]*)([?#].*)?$/);
  if (!match) return null;

  const pathname = match[1];
  const suffix = match[2] || '';

  const normalized = `/${pathname
    .replace(/^\.\//, '')
    .replace(/^\//, '')
    .replace(/\/$/, '')}`.toLowerCase();

  const route = routeAliases.get(normalized);

  return route ? `${route}${suffix}` : null;
}

function nodeToJSX(node, ctx) {
  if (node.nodeType === 3) {
    return escapeJSXText(node.textContent || '');
  }

  if (node.nodeType === 8) {
    return '';
  }

  if (node.nodeType !== 1) {
    return '';
  }

  const tag = node.tagName.toLowerCase();

  if (
    ['script', 'style', 'noscript', 'template'].includes(tag)
  ) {
    return '';
  }

  const children = Array.from(node.childNodes)
    .map(child => nodeToJSX(child, ctx))
    .join('');

  const attrs = jsxAttrs(node, ctx);

  if (tag === 'a') {
    const href = node.getAttribute('href');
    const to = href && linkTarget(href);

    if (to) {
      ctx.usesLink = true;

      return `<Link${attrs} to={${JSON.stringify(to)}}>${children}</Link>`;
    }

    return `<a${attrs}${
      href === null
        ? ''
        : ` href={${JSON.stringify(href)}}`
    }>${children}</a>`;
  }

  if (VOID.has(tag)) {
    return `<${tag}${attrs} />`;
  }

  return `<${tag}${attrs}>${children}</${tag}>`;
}

function collectStyles(doc, ctx) {
  const styles = [];

  for (const node of doc.querySelectorAll('style')) {
    if (node.textContent?.trim()) {
      styles.push(node.textContent);
    }
  }

  for (const link of doc.querySelectorAll('link[rel="stylesheet"]')) {
    const href = link.getAttribute('href');

    if (
      !href ||
      /^(?:https?:|\/\/|data:)/i.test(href)
    ) {
      if (href) {
        ctx.warnings.push(
          `External stylesheet must be loaded separately: ${href}`
        );
      }

      continue;
    }

    const local = path.resolve(
      ctx.pageDir,
      href.split(/[?#]/)[0]
    );

    if (
      fs.existsSync(local) &&
      fs.statSync(local).isFile()
    ) {
      styles.push(fs.readFileSync(local, 'utf8'));
    } else {
      ctx.warnings.push(`Stylesheet not found: ${href}`);
    }
  }

  if (!styles.length) {
    return null;
  }

  // Preserve source CSS for visual fidelity.
  return styles.join('\n\n');
}

function safeWrite(file, content, { backup = true } = {}) {
  if (dryRun) {
    return;
  }

  fs.mkdirSync(path.dirname(file), {
    recursive: true,
  });

  if (fs.existsSync(file)) {
    const current = fs.readFileSync(file, 'utf8');

    if (current === content) {
      return;
    }

    if (!overwrite) {
      throw new Error(
        `Refusing to overwrite ${path.relative(ROOT, file)}. Pass --overwrite.`
      );
    }

    if (backup && !noBackup) {
      const rel = path.relative(ROOT, file);
      const destination = path.join(BACKUP_ROOT, rel);

      fs.mkdirSync(path.dirname(destination), {
        recursive: true,
      });

      fs.copyFileSync(file, destination);
    }
  }

  fs.writeFileSync(file, content, 'utf8');
}

function run() {
  let failed = 0;

  for (const [slug, name] of PAGES) {
    const pageDir = path.join(DESIGN_ROOT, slug);
    const htmlFile = path.join(pageDir, 'code.html');

    if (!fs.existsSync(htmlFile)) {
      console.error(
        `MISSING ${path.relative(ROOT, htmlFile)}`
      );

      failed++;
      continue;
    }

    try {
      const dom = new JSDOM(
        fs.readFileSync(htmlFile, 'utf8')
      );

      const doc = dom.window.document;
      const main = doc.querySelector('main');

      if (!main) {
        throw new Error('No <main> element found');
      }

      const ctx = {
        slug,
        pageDir,
        assets: new Map(),
        warnings: [],
        usesLink: false,
      };

      const jsx = nodeToJSX(main, ctx);
      const css = collectStyles(doc, ctx);

      const title =
        doc.querySelector('title')?.textContent?.trim() ||
        `${name.replace(/Page$/, '')} | ApplyNora`;

      const description =
        doc
          .querySelector('meta[name="description"]')
          ?.getAttribute('content') ||
        `${name.replace(/Page$/, '')} on ApplyNora`;

      const imports = [
        "import { Helmet } from 'react-helmet-async';",
      ];

      if (ctx.usesLink) {
        imports.push(
          "import { Link } from 'react-router-dom';"
        );
      }

      if (css) {
        imports.push(`import './${name}.css';`);
      }

      const code = `${imports.join('\n')}

export function ${name}() {
  return (
    <>
      <Helmet>
        <title>{${JSON.stringify(title)}}</title>
        <meta
          name="description"
          content={${JSON.stringify(description)}}
        />
      </Helmet>
      ${jsx}
    </>
  );
}
`;

      const out = path.join(
        OUTPUT_ROOT,
        `${name}.tsx`
      );

      safeWrite(out, code);

      if (css) {
        safeWrite(
          path.join(OUTPUT_ROOT, `${name}.css`),
          css
        );
      }

      for (const [source, destination] of ctx.assets) {
        if (dryRun) {
          continue;
        }

        fs.mkdirSync(path.dirname(destination), {
          recursive: true,
        });

        if (fs.existsSync(destination) && !overwrite) {
          continue;
        }

        fs.copyFileSync(source, destination);
      }

      console.log(
        `${dryRun ? 'WOULD GENERATE' : 'GENERATED'} ` +
        `${path.relative(ROOT, out)} ` +
        `(${ctx.assets.size} assets)`
      );

      for (const warning of ctx.warnings) {
        console.warn(`  WARN ${warning}`);
      }

    } catch (err) {
      console.error(
        `FAILED ${name}: ${err.message}`
      );

      failed++;
    }
  }

  if (failed) {
    console.error(
      `${failed} page(s) could not be converted.`
    );

    process.exitCode = 1;
  }
}

run();
