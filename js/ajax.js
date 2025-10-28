let displaydata = document.getElementById("displaydata");

let httpcreate = new XMLHttpRequest();
httpcreate.open("GET","mydetails.json");
httpcreate.onload = function datadisplay() {
    const urldata  = this.responseText;
    const sidequotesremove = JSON.parse(urldata);  
    for (let index = 0; index < sidequotesremove.length; index++) {
        const element = sidequotesremove[index];
        displaydata.innerHTML += `<h2>${element.myname}</h2><h2>${element.myage}</h2><h2>${element.myrole}</h2>`       
    }  
}

httpcreate.send()
