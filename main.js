const todoList = document.getElementById('todoList');
window.addTodo = function(){
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    
    

    if (todoText !== ""){
        addTodoToList(todoText);
        todoInput.value = '';
    } else {
        alert("ToDoを入力してください。");
    }
};
function addTodoToList(todoText) {
    
    const li = document.createElement('li');
    console.log(li)
    console.log(li.textContent);
    li.textContent = todoText;
    todoList.appendChild(li);
}