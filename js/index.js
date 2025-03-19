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






//Opgave Shoppinglist JS events
let button = document.getElementById("addButton");

button.addEventListener("click", addItem);

function addItem(){
    let inputField = document.getElementById("inputTextField");
    let inputFieldValue = inputField.value;

    let liToBeAdded = addLi("healthy", 5, inputFieldValue);
    appendLi(liToBeAdded);

}