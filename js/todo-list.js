// event target
const input = document.querySelector(".insert-todo input");
const addBtn = document.querySelector(".insert-todo button");
const todayList = document.querySelector("#today-list");

// 할일 등록
const addTodo = (event) => {
    const todoList = document.querySelector("#today-list");
    const input = document.querySelector(".insert-todo input[type='text']");
    const inputTodo = input.value;
    const todo = document.createElement("li");
    todo.classList.add("item");
    todo.innerHTML = `<span>${inputTodo}<input type='checkbox'></span><button type='button'>삭제</button>`;
    todayList.prepend(todo);
    input.value = "";
    input.focus();
}

// 할일 수정
const updateTodo = (event) => {
    // console.log(event.target.parentElement);
    event.target.parentElement.classList.toggle("complete");
}

// 할일 삭제
const removeTodo = (event) => {
    // console.log(event.target.parentElement);
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
}


// event handler 등록
addBtn.addEventListener("click", addTodo);
todayList.addEventListener("change", updateTodo);
todayList.addEventListener("click", removeTodo);

input.addEventListener("change", (event) => {
    // if (event.keyCode === 13) {
        addTodo(event);
    // }
});