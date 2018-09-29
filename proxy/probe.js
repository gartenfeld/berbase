const path = require('path');
const cheerio = require('cheerio');
const fetchContent = require('./request_via_proxy');
const saveHTML = require('./save_html');

var OUTPUT_DIR = './';
var outputPath = path.resolve(__dirname, OUTPUT_DIR);

var filename = 'foobar.html';
var filePath = path.join(outputPath, filename);

// var BASE_URL = `https://www-eng-x.llnl.gov/documents/tests/`;
// var affix = 'txt.html';

var BASE_URL = `http://icanhazip.com`;
var affix = '';

var url = BASE_URL + affix;
fetchContent(url).then(data => {
  saveHTML(filePath, data);
});
