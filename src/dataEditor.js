const fs = require("fs");
const path = require("path");

const dataEditor = (file) => {

    //listing all files using forEach
    // files.forEach(function (file) {

    // console.log("file name: ", data);

    const getFileName = file.split(".")[0]

    // console.log("parseInt(getFileName)", parseInt(getFileName));

    // const fileNameWithoutJson = + makePading(parseInt(getFileName), 6);
    // data.split(".")[0].replace(/\D/g, '');

    // console.log("File Name:", fileNameWithoutJson);

    // console.log(typeof fileNameWithoutJson);

    const filePath = path.join(__dirname, `../static/${file}`);

    // console.log("filePath", filePath);

    const fileReader = fs.readFileSync(filePath);

    const json = JSON.parse(fileReader);

    // console.log(json);

    const { name, description, image, edition, attributes, compiler } = json;

    // console.log("name, description, image, edition, attributes, compiler", name, description, image, edition, attributes, compiler);


    const newImagePath = `ipfs:Qmcnavj7P7fbjPgZNDfsgoynUKbD59c3HjbJ9Q4kucR1rs/${getFileName}.png`

    const newJsonData = {
        name, description, image: newImagePath, edition: getFileName, attributes, compiler
    };
    // newJsonData.edition = fileNameWithoutJson;
    // json.edition = parseInt(fileNameWithoutJson, 6);

    // console.log("newJsonData", newJsonData);

    const newGenFilePath = path.join(__dirname, `../newGenFile/${file}`);

    // console.log("newGenFilePath", newGenFilePath);

    fs.writeFileSync(
        newGenFilePath,
        JSON.stringify(newJsonData, null, 2)
    );

    // });

};

module.exports = {
    dataEditor
};