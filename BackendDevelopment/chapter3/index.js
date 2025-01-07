// console.log(`File Handling using Node`);
const {readFile,writeFile, appendFile,mkdir} = require('node:fs/promises');

// read file

const readTextFile = async ()=>{
    const data = await readFile('sample.txt','utf-8');
    console.log(data);
}

// readTextFile();

// create Filr

const writeTextFile = async ()=>{
    await writeFile('sample2.txt','Hello World,My name is Arpit','utf8');
}
// writeTextFile();

// add content to existing file
const appendTextFile = async ()=>{
    const data = await appendFile('sample.txt','\n Extra content added sucessfully.','utf8');
    console.log(data);
}
// appendTextFile();

// create folder using node
// const createFolder = async (dir)=>{
//     mkdir(dir);
// }

// createFolder('components');

// to create multiple folders at once and inside

// const createFolder = async (dir)=>{
//     mkdir(dir,{recursive:true})
// }

// createFolder('src/public/assets');

const createGitFile = async ()=>{
    writeFile('.gitignore','/npm');
}

createGitFile();