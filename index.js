"use strict";
var csvtojson = require("csvtojson");
var csv = "\na,b,c\n1,2,3\n4,5,6\n";
csvtojson({ noheader: true, ignoreEmpty: true })
    .fromString(csv)
    .on('csv', function (csvRow) {
    console.log(csvRow);
});
