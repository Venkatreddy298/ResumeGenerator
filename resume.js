
function addNewWEField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows",3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQFeild() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.setAttribute("rows",3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}



//generating CV
function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    //direct
    document.getElementById("nameT2").innerHTML=nameField;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("inT").innerHTML=document.getElementById("inField").value;
    document.getElementById("liT").innerHTML=document.getElementById("liField").value;


    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //work experience
    let wes=document.getElementsByClassName("weField");
    let str="";
    for(let e of wes){
        str = str +`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //academic qualification
    let aqs=document.getElementsByClassName("aqField");
    let str2="";
    for(let e of aqs){
        str2 = str2 +`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str2;


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

//printCV

function printCV(){
    window.print();
}