import fs from 'fs';

function fixFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/import \{ Link \} from 'react-router-dom';\n/g, "");
    content = content.replace(/import React, \{ useState \} from 'react';\n/g, "import { useState } from 'react';\n");
    content = content.replace(/import \{ Helmet \} from 'react-helmet-async';/g, "import { Helmet } from 'react-helmet-async';\nimport { Link } from 'react-router-dom';");
    content = content.replace(/checked=""/g, "defaultChecked={true}");
    content = content.replace(/disabled=""/g, "disabled={true}");
    content = content.replace(/required=""/g, "required={true}");
    content = content.replace(/maxlength="([^"]*)"/gi, "maxLength={$1}");
    content = content.replace(/colspan="([^"]*)"/gi, "colSpan={$1}");
    content = content.replace(/readonly=""/gi, "readOnly={true}");
    content = content.replace(/class="([^"]*)"/gi, 'className="$1"');

    fs.writeFileSync(file, content);
}

const pageNames = [
  'HomePage',
  'FeaturesPage',
  'HowItWorksPage',
  'PricingPage',
  'AboutPage',
  'ContactPage',
  'BlogPage'
];

for (const name of pageNames) {
  fixFile(`apps/web/src/pages/${name}.tsx`);
}
