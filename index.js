const express =require('express')
const server =express()


server.get('/api/main',(req,res)=>{
    res.send('hellow world')
})
const config = JSON.stringify({ ip: '1234.22.11', port: 3000});
console.log(JSON.parse(config));

server.listen(4000,()=>{
    console.log("server started");
    console.log("here server is running");
    console.log("here server is running again");
})