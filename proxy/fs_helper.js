const fs = require('fs');

/**
 * @param  {string} path - Path to directory.
 * @return {[]} - A list of filenames.
 */
function loadDirectory(path) {
  return fs.readdirSync(path, 'utf8');
}

/**
 * @param  {string} filename
 * @return {string} - It is necessary to specify the encoding to have
 *   the file content returned as a string instead of a buffer.
 */
function loadFile(filename) {
  return fs.readFileSync(filename, 'utf8');
}

function openFile(filename) {
  return new File(filename);
}

function writeFile(filename, data) {
  fs.writeFileSync(filename, data);
}

function isExistent(path) {
  try {
    fs.accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
}

function createDirectory(path) {
  if (!isExistent(path)) {
    fs.mkdirSync(path);
  }
}

function File(path) {
  this.path = path;
  this.open();
}

File.prototype.open = function(flag) {
  this.stream = fs.createWriteStream(this.path, {
    flags: flag || 'a'
  }).on('error', console.error);
  return this;
};

File.prototype.clear = function() {
  return this.close().open('w').close().open();
};

File.prototype.append = function(data) {
  this.stream.write(data);
  return this;
};

File.prototype.close = function() {
  this.stream.end();
  delete this.stream;
  return this;
};

module.exports = {
  mkdir: createDirectory,
  list: loadDirectory,
  open: openFile,
  read: loadFile,
  write: writeFile
};