const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
app.get("/",function name(request,response) {

    response.sendFile(path.join(__dirname,"index.html"))
    
    // fs.open("express.txt","w+",function name(params) {
        
    // })
    // fs.writeFileSync("express.txt","welcome to express class",function name(params) {
        
    // })
    // const output = fs.readFileSync("express.txt","utf-8",function name(params) {
        
    // })    

    // response.send(output)
})


app.get("/rohith",(request,response)=>{

    response.sendFile(path.join(__dirname,"/htmlfile/about.html"))
    // fs.open("rohith.txt","w+",function name(params) {
        
    // })
    // fs.writeFileSync("rohith.txt","another file data",function name(params) {
        
    // })
    // const output = fs.readFileSync("rohith.txt","utf-8",function name(params) {
        
    // })
    
    // response.send(output)
})

app.listen(2000)