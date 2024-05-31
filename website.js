
const http=require("http");
const port=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    console.log(req.url);
    
    
    res.setHeader('Content-Type', 'text/html');
    if(req.url=="/"){
        res.statusCode=200;
        res.end('<h1>THis is Server Application</h1> <p>Hey THis is me Muqdas</p>');
    }else if(req.url == "/about"){
        res.statusCode=200;
        res.end('<h1>THis is  About Server Application</h1> <p>Hey THis is me Muqdas</p>');
    }else{
        res.statusCode=404;
        res.end('<h1>Page is not found</h1> <p>Hey THis is me Muqdas</p>');
    }

});
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
    
});