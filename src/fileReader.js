const { dataEditor } = require("./dataEditor");


const fileReader = (filePath) => {

    //joining path of directory 
    const directoryPath = path.join(__dirname, filePath);

    // console.log("directoryPath", directoryPath);


    //passsing directoryPath and callback function
    return fs.readdir(directoryPath, (err, files) => {
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