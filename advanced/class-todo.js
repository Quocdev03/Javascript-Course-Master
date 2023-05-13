// MVC: Model View Controller

class Modal {
   constructor() {
      this.todos = [];
   }

   handleTodoChange(handler) {
      this.todoListChange = handler;

   }

   _reload(todos) {
      this.todoListChange(todos);
   }

   addTodo(todoText) {
      if (todoText.length > 0) {
         this.todos.push(todoText);
      }
   }

   removeTodo(todoText) {
      const index = this.todos.findIndex((item) => item === todoText);
      this.todos = this.todos.splice(index, 1);
      this._reload(thos.todos);
   }
}
class View {
   constructor() {
      this.app = this.getElement("body");

      this.todoWrapper = this.createElement("div", "todo");
      this.form = this.createElement("form", "todo-form");
      this.form.autocomplete = "off";

      this.input = this.createElement("input", "todo-input");
      this.input.type = "text";
      this.input.placeholder = "Enter your task";
      this.input.name = "todo";

      this.submit = this.createElement("button", "todo-submit");
      this.submit.type = "submit";
      this.submit.textContent = "add";

      this.form.append(this.input, this.submit);

      this.todoList = this.createElement("div", "todo-list");
      this.todoWrapper.append(this.form, this.todoList);
      this.app.append(this.todoWrapper);
   }

   // createElement
   createElement(tag, className) {
      const elm = document.createElement(tag);
      if (className) elm.classList.add(className);
      return elm;
   }

   // getElement
   getElement(selector) {
      const elm = document.querySelector(selector);
      return elm;
   }

   get _todoValue() {
      return this.input.value;
   }
   _resetValue() {
      this.input.value = "";
   }

   displayTodos(todos) {
      if (todos.length > 0) {
         [...todos].forEach(todoText => {
            const todoItem = this.createElement("div", "todo-item");
            const span = this.createElement("span", "todo-text");
            span.textContent = todoText;
            const icon = this.createElement("i");
            icon.className = "fa fa-trash todo-remove";
            icon.setAttribute("data-value", todoText);

            todoItem.append(span, icon);

            this.todoList.append(todoItem);
         });
      }
   }

   viewAddTodo(handler) {
      this.form.addEventListener("submit", e => {
         e.preventDefault();
         if (this._todoValue) {
            handler(this._todoValue)
            this._resetValue();
         }
      });
   }

   viewRemoveTodo(handler) {
      this.todoLisst.addEventListener("click", e => {
         if (e.target.matches(".todo-remove")) {
            const value = e.target.dataset.value;
            handler(value);
         }
      });
   }
}
class Controller {
   constructor(modal, view) {
      this.modal = modal;
      this.view = view;
      // this.modal.addTodo("evondev");
      // this.view.displayTodos(this.modal.todos);
      this.modal.handleTodoChange(this.handleTodoChange);
      this.view.viewAddTodo(this.handlerAddTodo);
      this.view.removeTodo(this.removeTodo);

      this.handleTodoChange(this.modal.todos);

   }

   handleTodoChange = todos => {
      this.view.displayTodos(todos);
   }

   handlerAddTodo = todoText => {
      this.modal.addTodo(todoText);
   }
   handleRemoveTodo = todoText => {
      this.modal.removeTodo(todoText);
   }
}
const app = new Controller(new Modal(), new View());
// tới 310