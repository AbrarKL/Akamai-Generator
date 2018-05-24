const escodegen = require('escodegen');
const esprima = require('esprima');
const fs = require('fs');

// Load the obfuscated async.js script
const obfuscatedScript = fs.readFileSync('./async.js', 'utf-8');

// Parse the obfuscated async.js script
const parsedScript = esprima.parseScript(obfuscatedScript);

// Get the _ac array
const _acParsed = parsedScript.body[0].declarations[0];

// Edit the _ac array (turn hex strings into readable text)
_acParsed.init.elements.forEach((element, index) => {
  element.raw = element.value;
  _acParsed.init.elements[index] = element;
});

// Turn the _ac array back into JS
const generatedCode = escodegen.generate(_acParsed);

// Write the generated code to a file
fs.writeFileSync('./deobfuscated.js', generatedCode, 'utf-8');
