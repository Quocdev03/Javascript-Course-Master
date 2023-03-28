window.addEventListener("load", function () {
   // Variables declaration
   const form = document.querySelector(".todo-form");
   const todoList = document.querySelector(".todo-list");
   let todos = localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
   if (Array.isArray(todos) && todos.length > 0) {
      [...todos].forEach((item) => createTodoItem(item));
   }
   function createTodoItem(title) {
      const template = `<div class="todo-item"><span class="todo-text">${title}</span><i class="fa fa-trash todo-remove" data-value="Learning english"></i></div>`;
      todoList.insertAdjacentHTML("beforeend", template);
   }
   form.addEventListener("submit", function (e) {
      e.preventDefault();
      const todoVal = this.elements["todo"].value;
      // Main code
      createTodoItem(todoVal);
      todos.push(todoVal);
      localStorage.lenght > 0 && localStorage.setItem("todoList", JSON.stringify(todos));
      // save localstrorage
      this.elements["todo"].value = "";
   });

   // Handle Remove Todo
   todoList.addEventListener("click", function (e) {
      if (e.target.matches(".todo-remove")) {
         // remove todo in DOM
         const todo = e.target.parentNode;
         todo.parentNode.removeChild(todo);
         // remove todo in localstorage
         const todoText = e.target.previousElementSibling.textContent;
         const newTodo = todos.filter((item) => item !== todoText);
         localStorage.setItem("todoList", JSON.stringify(newTodo));
      }
   });
});
// tới 228