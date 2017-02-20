var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder('', './system-config.js');

// ready to build

builder
    .bundle('src/index.js', 'bundle.js')
    .then(function () {
        console.log('Build complete');
    })
    .catch(function (err) {
        console.log('Build error');
        console.log(err);
    });
