const path=require("path");

const a=path.basename('C:\\temp\\myfile.html');
const b=path.dirname('C:\\temp\\myfile.html');


console.log(a);
console.log(b);
console.log(__filename);
console.log(path.extname(__filename))
