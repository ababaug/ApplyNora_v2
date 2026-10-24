import fs from 'fs';
import { JSDOM } from 'jsdom';

const pages = [
  'applynora_home',
  'applynora_features',
  'applynora_how_it_works',
  'applynora_pricing',
  'applynora_about',
  'applynora_contact',
  'applynora_blog'
];

const pageNames = [
  'HomePage',
  'FeaturesPage',
  'HowItWorksPage',
  'PricingPage',
  'AboutPage',
  'ContactPage',
  'BlogPage'
];

function domToJSX(node) {
  if (node.nodeType === 3) {
    let text = node.textContent;
    text = text.replace(/{/g, '&#123;');
    text = text.replace(/}/g, '&#125;');
    text = text.replace(/</g, '&lt;');
    text = text.replace(/>/g, '&gt;');
    return text;
  }
  if (node.nodeType === 8) {
    return `{/* ${node.textContent.replace(/\*\//g, '* /')} */}`;
  }

  if (node.nodeType !== 1) return '';

  const tagName = node.tagName.toLowerCase();

  const selfClosing = ['img', 'input', 'br', 'hr', 'meta', 'link', 'path'];

  if (tagName === 'script' || tagName === 'style') {
      return '';
  }

  let attributesStr = '';
  for (let attr of node.attributes) {
    let name = attr.name;
    let value = attr.value;

    if (name === 'class') name = 'className';
    if (name === 'for') name = 'htmlFor';
    if (name === 'viewbox') name = 'viewBox';
    if (name === 'stroke-width') name = 'strokeWidth';
    if (name === 'stroke-linecap') name = 'strokeLinecap';
    if (name === 'stroke-linejoin') name = 'strokeLinejoin';
    if (name === 'fill-rule') name = 'fillRule';
    if (name === 'clip-rule') name = 'clipRule';
    if (name === 'style') continue;

    // We intentionally ignore onclick and related attributes to map them manually
    if (name.startsWith('on')) continue;

    value = value.replace(/"/g, '&quot;');
    attributesStr += ` ${name}="${value}"`;
  }

  if (tagName === 'a') {
      const href = node.getAttribute('href');
      if (href && href.startsWith('#')) {
          attributesStr = attributesStr.replace(/href="[^"]*"/, 'to="/"');
          const children = Array.from(node.childNodes).map(domToJSX).join('');
          return `<Link${attributesStr}>${children}</Link>`;
      }
  }

  if (selfClosing.includes(tagName)) {
    return `<${tagName}${attributesStr} />`;
  }

  const children = Array.from(node.childNodes).map(domToJSX).join('');
  return `<${tagName}${attributesStr}>${children}</${tagName}>`;
}

for (let i = 0; i < pages.length; i++) {
  const page = pages[i];
  const name = pageNames[i];

  const htmlPath = `apps/web/design-assets/stitch_applynora_design_system/${page}/code.html`;
  const html = fs.readFileSync(htmlPath, 'utf8');

  const dom = new JSDOM(html);

  let mainNode = dom.window.document.querySelector('main');

  if (mainNode) {
    let content = domToJSX(mainNode);

    // Quick unescape for certain attributes that got double escaped or messed up if needed.
    // In this robust version, we escaped text content safely with HTML entities.

    const metaTags = `<Helmet>
           <title>${name} - ApplyNora</title>
           <meta name="description" content="${name} for ApplyNora" />
       </Helmet>`;

    const componentCode = `
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function ${name}() {
  return (
    <>
      ${metaTags}
      ${content}
    </>
  );
}
`;

    fs.writeFileSync(`apps/web/src/pages/${name}.tsx`, componentCode);
  }
}
