const toDoForm = document.querySelector(".toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

const delToDo = (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    const cleanToDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    toDoList.removeChild(li);
    saveToDos();
}

const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

const paintToDo = (text) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "X";
    delBtn.addEventListener('click', delToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

const handelSubmit2 = (event) => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

const loadToDos = () => {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach((toDo) => {
            paintToDo(toDo.text)
        });
    }
}
function init3() {
    loadToDos();
    toDoForm.addEventListener('submit', handelSubmit2);
}

init3();