const estraverse = require('estraverse');
const escodegen = require('escodegen');
const esprima = require('esprima');
const fs = require('fs');

// Load deobfuscated _ac Array
const _acArray = require('./_ac.js')

// Read in the input script
const script = fs.readFileSync('./input/async.js', 'utf8');

// Create an AST represention of the input script
const scriptParsed = esprima.parseScript(script);

// Deobfuscate the _ac Array (hex value -> string literal)
let scriptNew = estraverse.replace(scriptParsed, {
  enter: function(node) {
    if (node.type === 'VariableDeclarator' && node.id.name === '_ac') {
      // Modify the node object's elements array
      node.init.elements = node.init.elements.map(element => {
        return {
          type: 'Literal',
          value: element.value,
          raw: element.value
        }
      });
      return node;
    }
  }
})

// Replace all _ac array references with literals (_ac[x] -> string literal)
scriptNew = estraverse.replace(scriptNew, {
  enter: function(node) {
    if (node.type === 'MemberExpression' && node.object.name === '_ac') {
      return {
        type: 'Literal',
        value: _acArray[node.property.value],
        raw: _acArray[node.property.value]
      }
    }
  }
});

// Convert scriptNew back to JS and save to file
const deobfuscated = escodegen.generate(scriptNew);
fs.writeFileSync('./output/deobfuscated.js', deobfuscated, 'utf8');
