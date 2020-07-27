//----------Selector 

const todoInput =  document.querySelector(".todo-input");
const todoBtn =  document.querySelector(".todo-btn");
const todoList =  document.querySelector(".todo-list");
const filterOptions = document.querySelector(".filter-todo")



//-----------------Event Listeners

todoBtn.addEventListener("click",addTolist)
todoList.addEventListener("click",deleteCheck);
filterOptions.addEventListener("click",filterTodo); 


//---------------------Functions

     function addTolist(event) {
    //prevent form from submittin
    event.preventDefault();
    //TODO  DIV 
    const todoDiv = document.createElement("div"); 
     todoDiv.classList.add("todo"); 
    //todoDiv.style.background = "red";

     // TOD LI
     const newTodo = document.createElement("li");
     newTodo.innerText = todoInput.value;
     newTodo.classList.add("todo-item");
     todoDiv.appendChild(newTodo); //this will add li in div 


     //ChecK BUTTON

     const checkButton =  document.createElement("button");
     checkButton.innerHTML = '<i class = "fas fa-check"></i>';
     checkButton.classList.add("complete-btn"); 
     todoDiv.appendChild(checkButton);

     //DELET BUTTON
     const deleteButton =  document.createElement("button");
     deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
     deleteButton.classList.add("delete-btn"); 
     todoDiv.appendChild(deleteButton);
      
     //Append it to the div 
     todoList.appendChild(todoDiv);

     //Clear todo input value

     todoInput.value = "";

}

function deleteCheck(e){
    console.log(e.target);
    const item  = e.target; // getting the iterm what we are click on
      
    if(item.classList[0] === "delete-btn")
    {
        const todo = item.parentElement;
        todo.classList.add("fall");
        addEventListener("transitionend", function(){
           todo.remove();
        });
    }


    ///Check Mark
    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
         //alert("Task Has been Completed");
        //todo.remove();
    }

}


//function for filter todo 
function filterTodo(e){

    const todos =  todoList.childNodes;

    todos.forEach(function(todo){
         switch(e.target.value) //this will return the value of selected filter 
         {
             case "all":
                 todo.style.display = "flex";
                break;
            case "completed":
               if(todo.classList.contains("completed"))
                 {
                     todo.style.display= "flex";

                 }

                 else{
                     todo.style.display = "none";
                 }
                 break;
                case "uncompleted":
                if(!todo.classList.contains("completed"))
                {
                    todo.style.display= "flex";

                }

                else{
                    todo.style.display = "none";
                }
                break;
                
         }
    });
     

     

}