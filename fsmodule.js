const fs = require('fs');
// const a=fs.readFile("file.txt","utf8",(err,data)=>{
//     console.log(err,data);
// })
const a=fs.writeFileSync("file.txt","THis is a file1");
console.log(a);

console.log("Finished reading file");