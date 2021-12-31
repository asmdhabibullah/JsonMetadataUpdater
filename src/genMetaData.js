const fs = require("fs");
const path = require("path");

// Iterate, open and put in metadata list
const genMetadata = () => {
    // Genarate metadata
    const metadataStaticPath = path.join(__dirname, "../newGenFile");

    fs.readdir(metadataStaticPath, (err, files) => {
        if (!err) {
            const metadata = files.map((file) => {
                const rawdata = fs.readFileSync(`${metadataStaticPath}/${file}`);

                // console.log(file);
                return JSON.parse(rawdata);
            })
                .sort((a, b) => parseInt(a.edition) - parseInt(b.edition));


            const metaDataFilePath = path.join(__dirname, "../newGenFile/_metadata.json");


            // console.log(
            //     `Extracted and sorted metadata files. Writing to file: ${metadataFilePath}`
            // );

            fs.writeFileSync(metaDataFilePath, JSON.stringify(metadata, null, 2));
        }
    });
};



module.exports = {
    genMetadata
}