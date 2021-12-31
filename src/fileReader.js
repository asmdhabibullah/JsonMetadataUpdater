const fs = require("fs");
const path = require("path");
const { dataEditor } = require("./dataEditor");


const fileReader = () => {

    //joining path of directory 
    const baseStaticPath = path.join(__dirname, "../static");

    // console.log("baseStaticPath", baseStaticPath);

    //passsing baseStaticPath and callback function
    fs.readdir(baseStaticPath, (err, files) => {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        // // console.log("files", files);
        files.forEach(file => {
            // const newFilePath = `${directoryPath}/${file}`;
            // genNewFiles.push(newFilePath);
            dataEditor(file)
            // console.log("newFilePath", newFilePath);
        });
        // console.log("genNewFiles 01", genNewFiles);
        // return genNewFiles;
    });
    // console.log("genNewFiles 02", genNewFiles);

};

module.exports = {
    fileReader
}