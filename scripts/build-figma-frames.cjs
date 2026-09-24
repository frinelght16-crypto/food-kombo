const fs = require('node:fs');
const path = require('node:path');
const babel = require('@babel/core');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'src/figma');
const screens = {};

for (let n = 1; n <= 18; n += 1) {
  const id = String(n).padStart(2, '0');
  let source = fs.readFileSync(path.join(sourceDir, id + '.jsx'), 'utf8');
  source = source.replace(/^import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm, '');
  source = source.replace(/<\/?motion\.div/g, tag => tag.replace('motion.div', 'div'));
  const name = source.match(/function (Component\d+)\s*\(/)?.[1];
  if (!name) throw new Error('Figma component ' + id + ' has no component function');

  const compiled = babel.transformSync(source, {
    filename: id + '.jsx',
    presets: [
      ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
      ['@babel/preset-react', { runtime: 'classic' }]
    ]
  }).code;
  const Component = new Function('React', compiled + '\nreturn ' + name + ';')(React);
  screens[id] = renderToStaticMarkup(React.createElement(Component));
}

fs.writeFileSync(
  path.join(root, 'figma-screens.generated.js'),
  'window.FOOD_KOMBO_FIGMA_SCREENS=' + JSON.stringify(screens) + ';\n'
);

const motion = JSON.parse(fs.readFileSync(path.join(sourceDir, 'motion.json'), 'utf8'));
const definitions = new Set();
const rules = [];
function takeAtRules(source, token) {
  let cleaned = source;
  let from = 0;
  while (true) {
    const start = cleaned.indexOf(token, from);
    if (start < 0) break;
    const open = cleaned.indexOf('{', start);
    if (open < 0) break;
    let depth = 0;
    let end = open;
    for (; end < cleaned.length; end += 1) {
      if (cleaned[end] === '{') depth += 1;
      if (cleaned[end] === '}') {
        depth -= 1;
        if (depth === 0) {
          end += 1;
          break;
        }
      }
    }
    definitions.add(cleaned.slice(start, end).trim());
    cleaned = cleaned.slice(0, start) + cleaned.slice(end);
    from = start;
  }
  return cleaned;
}
for (const { nodes = [] } of motion) {
  for (const node of nodes) {
    const css = node.codeSnippets?.css;
    if (!css) continue;
    const declarations = takeAtRules(takeAtRules(css, '@keyframes'), '@property').trim();
    const animation = declarations;
    if (animation) rules.push('[data-node-id="' + node.nodeId + '"]{' + animation + '}');
  }
}
fs.writeFileSync(
  path.join(root, 'src/styles/figma-motion.css'),
  [...definitions].join('\n') + '\n' + rules.join('\n') + '\n'
);
