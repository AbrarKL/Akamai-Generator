const escodegen = require('escodegen');
const esprima = require('esprima');
const fs = require('fs');

/**
TODO
1. Keep track of all _ac array elements that are changed in the program
  Look through entire AST for ExpressionStatements involving the _ac array

2. Replace all _ac array references that aren't modified with literals
  Look through entire AST for
**/

// Read in the input script
const script = fs.readFileSync('./input/async.js', 'utf8');

// Create an AST represention of the input script
const scriptParsed = esprima.parseScript(script);

// Will hold the new(deobfuscated) script in AST(Abstract Syntax Tree) format
const scriptNew = {
    "type": "Program",
    "body": [],
    "sourceType": "script"
};

// Get the _ac array declaration from input script
const _acDeclaration = scriptParsed.body[0];

// Deobfuscate the elements of the array declaration
_acDeclaration.declarations[0].init.elements.forEach((element, index, elements) => {
  elements[index] = {
    "type": "Literal",
    "value": element.value,
    "raw": element.value
  };
});

// Add the new _acDeclaration to scriptNew
scriptNew.body.push(_acDeclaration);

// Replace all _ac array calls in the body

// Convert scriptNew back to JS and save to file
const deobfuscated = escodegen.generate(scriptNew);
fs.writeFileSync('./output/deobfuscated.js', deobfuscated, 'utf8');
