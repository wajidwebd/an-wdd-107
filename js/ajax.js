let displaydata = document.getElementById("displaydata");

let httpcreate = new XMLHttpRequest();
httpcreate.open("GET","https://dummyjson.com/products");
httpcreate.onload = function datadisplay() {
    const urldata  = this.responseText;
    const sidequotesremove = JSON.parse(urldata);
    console.log(sidequotesremove.products);
    for (let index = 0; index < sidequotesremove.products.length; index++) {
        const element = sidequotesremove.products[index];
        
    }
    
    // displaydata.innerHTML += `<h2>${sidequotesremove.title}</h2><h2>${sidequotesremove.userId}</h2><h2>${sidequotesremove.id}</h2>`  
    // for (let index = 0; index < sidequotesremove.products.length; index++) {
    //     const element = sidequotesremove.products[index];
    //     displaydata.innerHTML += `<h2>${element.availabilityStatus}</h2><h2>${element.title}</h2><h2>${element.discountPercentage}</h2>`       
    // }  
}

httpcreate.send()
