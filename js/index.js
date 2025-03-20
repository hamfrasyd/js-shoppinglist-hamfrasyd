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
function appendLi(li){
    let listElement = document.getElementById("list");
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

/*TEST AREA*/
//task 1
let liTest = addLi("healthy", 4, "sutmig");
//task 2
appendLi(liTest);
//task 3
changeClassAttribute(liTest, "unhealthy");
//Task 4
let deleteTest = addLi("healthy", 5, "delete");
appendLi(deleteTest);
deleteElement(5);
//Task 5
changeTextOfLi(4);





//Opgave Shoppinglist JS events
let button = document.getElementById("addButton");

button.addEventListener("click", addItem);

function addItem(){
    let inputField = document.getElementById("inputTextField");
    let inputFieldValue = inputField.value;

    let liToBeAdded = addLi("healthy", 5, inputFieldValue);
    appendLi(liToBeAdded);

}