const { fileReader } = require("./fileReader.js");
const { genMetadata } = require("./genMetaData.js");

fileReader();

setTimeout(() => {

    genMetadata();

}, 5000);
