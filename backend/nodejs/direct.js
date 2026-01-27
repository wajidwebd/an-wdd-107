// const filecreating = require("fs");
// filecreating.open("filetxt.txt","w+",function name(params) {
    
// })
// filecreating.writeFileSync("filetxt.txt","welcome to nodejs class",function name(params) {
    
// })
// filecreating.appendFileSync("filetxt.txt","\nnow we are seeing filesystem.",function name(params) {
    
// })
// const storing = filecreating.readFileSync("filetxt.txt","utf-8",function name(params) {
    
// })
// console.log(storing);
// filecreating.renameSync("filetxt.txt","datas.txt",function name(params) {
    
// })
// filecreating.unlinkSync("datas.txt",function name(params) {
    
// })

const filesystem = require('fs');
const servercreating = require('http');

servercreating.createServer(function name(request,response) {
    
    filesystem.open("filecreate.txt","w+",function name(params) {
        
    })
    filesystem.writeFileSync("filecreate.txt","content show",function name(params) {
        
    })
    const output = filesystem.readFileSync("filecreate.txt","utf-8",function name(params) {
        
    })
    response.write(output)
    response.end()
    
}).listen(2001)