let formtagcall = document.getElementById("formtag");
let mynamecall = document.getElementById("myname");
let myagecall = document.getElementById("myage")
let displaydivcall = document.getElementById("displaydiv");
let countryvalue = document.getElementById("countryvalue")

formtagcall.addEventListener("submit",function submitfunction(e) {
    e.preventDefault();

    let newdivcreate = document.createElement("div");
    displaydivcall.appendChild(newdivcreate);

    let mynameinputtag = document.createElement("input");
    mynameinputtag.value = mynamecall.value;
    mynameinputtag.setAttribute("readonly","readonly");
    newdivcreate.appendChild(mynameinputtag);


        let myageinputtag = document.createElement("input");
    myageinputtag.value = myagecall.value;
    myageinputtag.setAttribute("readonly","readonly");
    newdivcreate.appendChild(myageinputtag);


    let selecttag = document.createElement("select");
    if (countryvalue.value == "darani") {
        selecttag.innerHTML = ` <option value="darani">India</option>
            <option value="China">China</option>`
        
    } else {
        selecttag.innerHTML = ` 
            <option value="China">China</option>
            <option value="darani">India</option>
            `
    }
    newdivcreate.appendChild(selecttag)

    let editbuttoncreate = document.createElement("button");
    editbuttoncreate.innerHTML = "Edit";
    newdivcreate.appendChild(editbuttoncreate);

    editbuttoncreate.addEventListener("click",function editfunction() {
        mynameinputtag.removeAttribute("readonly","readonly");
        myageinputtag.removeAttribute("readonly","readonly");
    })

    let savebuttoncreate = document.createElement("button");
    savebuttoncreate.innerHTML = "Save";
    newdivcreate.appendChild(savebuttoncreate);

    savebuttoncreate.addEventListener("click",function savefunction() {
        mynameinputtag.setAttribute("readonly","readonly");
        myageinputtag.setAttribute("readonly","readonly");
    })

    let deletebuttoncreate = document.createElement("button");
    deletebuttoncreate.innerHTML = "Delete";
    newdivcreate.appendChild(deletebuttoncreate);

    deletebuttoncreate.addEventListener("click",function deletefunction() {
        newdivcreate.style.display="none";
    })

    
})
