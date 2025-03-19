//Write your Javascript code here
function addLi(classAttribute, IdAttribute, paramTextNode){
    
    let newElement = document.createElement("li");

    newElement.setAttribute("class", classAttribute);
    newElement.setAttribute("id", IdAttribute);

    let textNode = document.createTextNode(paramTextNode);
    newElement.appendChild(textNode);
    return newElement;
}

function appendLi(li){
    let listElement = document.getElementById("list");
    listElement.appendChild(li);
}

let liTest = addLi("healthy", 4, "sutmig");
appendLi(liTest);