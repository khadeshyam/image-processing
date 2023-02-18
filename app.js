const fs = require("fs");
const util = require("util");


const imageToBinary = async (fileName) =>{
     try{
        let data =await fs.promises.readFile(fileName);
        return Buffer.from(data).toString('binary');
     }
     catch(err){
        throw err;
     }
}

const binaryToImage = async (fileName,binaryData) =>{
    try{
        const buffer = Buffer.from(binaryData, "binary");
        await fs.promises.writeFile(fileName, buffer, "binary");
        console.log(`Image saved as ${fileName}`);
    }
    catch(err){
       throw err;
    }
}

const main = async () =>{
    const binaryData = await imageToBinary("image.jpeg"); //get binary Data of image
    const fileName = 'image.svg';
    binaryToImage(fileName,binaryData);
    
}

main();



  

