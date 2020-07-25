//Selector 

const todoInput =  document.querySelector(".todo-input");
const todoBtn =  document.querySelector(".todo-btn");
const todoList =  document.querySelector(".todo-list");



//Event Listeners

todoBtn.addEventListener("click",addTolist)


//Functions

function addTolist(event) {
    //prevent form from submittin
    event.preventDefault();
    console.log("hello world");
    //TODO  DIV 
    const todoDiv = document.createElement("div"); 
     todoDiv.classList.add("todo"); 
     // TOD LI
     const newTodo = document.createElement("li");
     newTodo.innerText = "hello world";
     newTodo.classList.add("todo-item");
     todoDiv.appendChild(newTodo); //this will add li in div 


     //ChecK BUTTON

     const checkButton =  document.createElement("button");
     checkButton.innerHTML = '<li class = "fas fa-check"></li>';
     checkButton.classList.add("complete-btn"); 
     todoDiv.appendChild(checkButton);

     //DELET BUTTON
     const checkButton =  document.createElement("button");
     checkButton.innerHTML = '<li class = "fas fa-check"></li>';
     checkButton.classList.add("complete-btn"); 
     todoDiv.appendChild(checkButton);


    
      
}