const { AllHtmlEntities } = require('html-entities');
const entities = new AllHtmlEntities();

// Example function for HTML entity encoding
function encodeHTML(text) {
  return entities.encode(text);
}

// Example usage
const userInput = '<script>alert("XSS");</script>';
const encodedInput = encodeHTML(userInput);

console.log('User Input:', userInput);
console.log('Encoded Input:', encodedInput);

/////////////////////

const userInputx = '<script>alert("XSS");</script>';
const encodedInputx = String(userInput);

console.log('User Input:', userInputx);
console.log('Encoded Input:', encodedInputx);
