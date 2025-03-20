//Write your Javascript code here

// Task 1) Create a function that return a new Li element
function addLi(classAttribute, IdAttribute, paramTextNode){
    let newElement = document.createElement("li");

    newElement.setAttribute("class", classAttribute);
    newElement.setAttribute("id", IdAttribute);

    let textNode = document.createTextNode(paramTextNode);
    newElement.appendChild(textNode);
    return newElement;
}

// Task 2) Create a function that append a Li element to a list 
function hAppendLi(li){

    let listElement = document.getElementById("list");
    listElement.appendChild(li);
}
function uAppendLi(li){

    let listElement = document.getElementById("listUnhealthy");
    listElement.appendChild(li);
}

//Task 3) Create a function that change or add the class attribute 
function changeClassAttribute(element, value){
    element.setAttribute("class", value);
}

//Task 4) Create a function that delete a li element
function deleteElement(id){
    let element = document.getElementById(id); 
    element.remove();
}

//EXTRA Task 5) Create a function that change the text in a Li element
function changeTextOfLi(id){
    let element = document.getElementById(id); 
    element.textContent = "Det her er en ny";
}

//Extra Task 6) Create a function that count all the li element at a specific list
function returnNumberOfList(list){
    let element = document.getElementsByTagName(list); 
    return element.length;
}
//Extra Task 7) Move a node
function moveElements(){
    let listOfUnhealthy = document.getElementsByClassName("unhealthy");
    console.log(listOfUnhealthy);

    let newUl = document.getElementById("listUnhealthy");
    
    //reverse for loop da jeg fjerne noget fra "let listOfUnhealthy" hvert gang den iterere 1 gang
    for (let i = listOfUnhealthy.length - 1; i >= 0; i--) { 
     newUl.append(listOfUnhealthy[i]);
    }
}

/*TEST AREA*/
//task 1
let liTest = addLi("healthy", 4, "sutmig");
//task 2
hAppendLi(liTest);
//task 3
changeClassAttribute(liTest, "unhealthy");
//Task 4
let deleteTest = addLi("healthy", 5, "delete");
hAppendLi(deleteTest);
deleteElement(5);
//Task 5
changeTextOfLi(4);
//Task 6
console.log(returnNumberOfList("li"));
//Task 7
moveElements();



//Opgave Shoppinglist JS events
let button = document.getElementById("addButton");

button.addEventListener("click", addItem);

function addItem(){
    let inputField = document.getElementById("inputTextField");
    let inputFieldValue = inputField.value;

    let classOption = document.getElementById("classOption");
    let optionValue = classOption.value;

    let liToBeAdded = addLi(optionValue, 5, inputFieldValue);
    
    if (optionValue == "healthy"){
        hAppendLi(liToBeAdded);
    }
    else{
        uAppendLi(liToBeAdded);
    }

}