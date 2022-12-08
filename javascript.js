// slecting html elements
let todoInput=document.querySelector(".to-in")
let todobutton=document.querySelector(".to-btn")
let todolist=document.querySelector(".todo-list")

// adding event listener

todobutton.addEventListener('click',addto)





// add functions

function addto(){

    
    //  create todo list container

    const todoDiv=document.createElement('div')
    todoDiv.classList.add('todo')




     //  create todo list 

     const todoli=document.createElement('li')
     todoli.classList.add('items')
    todoli.innerText=todoInput.value
    todoDiv.appendChild(todoli)

    todolist.appendChild(todoDiv)

    // clear input

    todoInput.value ="";

}
