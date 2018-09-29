const beautify = require('js-beautify').html;
const local = require('./fs_helper');

function formatHTML(raw) {
  return beautify(raw, { indent_size: 2 });
}

function writeToFile(filePath, data) {
  return local.write(filePath, data);
}

function saveHTML(filePath, data) {
  writeToFile(filePath, formatHTML(data));
  console.log('Saved to: ' + filePath);
}

module.exports = saveHTML;
