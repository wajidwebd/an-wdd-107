let httpcreate = new XMLHttpRequest();
httpcreate.open("GET","data.json");
httpcreate.onload = function name(params) {
    // const storing = this.responseText;
    // const sideremove = JSON.parse(storing);
    // console.log(sideremove);
    const sideremove = JSON.parse(this.responseText);
    console.log(sideremove);
    
    
}
httpcreate.send();

// const data = {
//     myname:"ddd"
// }
// console.log(data);
