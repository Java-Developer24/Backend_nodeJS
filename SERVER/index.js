const http=require("http");
const fs=require('fs');
const url=require('url')

 const myServer=http.createServer((req,res)=>{
    // console.log(req.headers);
    if(req.url==='/favicon.ico') return res.end();
    const log=`${Date.now()} ${req.url} :New req received\n`
    const myURL=url.parse(req.url,true);
    console.log(myURL);
    
    fs.appendFile("./log.txt",log,(err,data)=>{
        if(myURL.pathname=="/"){
            res.end("hello from server");

        }else if(myURL.pathname=="/about"){
            const username=myURL.query.name;
            res.end(`Hi ,${username}`);
            
        }else{
            res.end("404 Not found");
            
        }
        
        


    });
    

});
myServer.listen(8000,()=>{
    console.log("server is started")
})
