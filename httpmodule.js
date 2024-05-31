const { Console } = require("console");
const http=require("http");
const port=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    console.log(req);
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>THis is Server Application</h1> <p>Hey THis is me Muqdas</p>');

});
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
    
});