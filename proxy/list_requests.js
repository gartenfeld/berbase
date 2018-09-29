var counter = 0;

var list = require('./SOME_LIST');

function callNextStep() {
  if (counter < list.length) {
    var item = list[counter];
    var url = 'BASE_URL' + item;
    // Make request
    getRawContent(url).then(data => {
      // Call content processing
      // ...
      // Proceed only on success
    }).finally(() => callNextStep());
    ////
    counter++;
  }
}

callNextStep();
