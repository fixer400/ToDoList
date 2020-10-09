let button=document.querySelector(".save__button");
let Del=document.querySelectorAll(".close");
let parent=document.querySelector(".todo__list__action");
let text=document.querySelector("input");

let TodoList={};
console.log (button);
button.onclick = function AddTask (event){
    if(text.value=="")return;
    let element=(`<div class="todo__element">${text.value}
                <button onclick="DelTask(this)" class="close">X</button>
            </div>`);
    parent.innerHTML=parent.innerHTML+element;
    console.dir(element);
    text.value="";
};
function DelTask (a){
    parent.removeChild(a.parentElement)
};
