const { dataEditor } = require("./dataEditor.js");
const { fileReader } = require("./fileReader.js");


const files = fileReader("../static")


console.log("files", files);

// dataEditor(files)