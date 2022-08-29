import { createApp } from "vue";

import App from "./App.vue";
import ToDoList from "./components/ToDoList.vue";
import NewTodo from "./components/NewTodo.vue";
import { createStore } from "vuex";

const store = createStore({
  /* state, actions, mutations */
  state: {
    todoList: [],
  },

  getters: {
    getAllTodoList: (state) => {
      return state.todoList;
    },
  },

  mutations: {
    checkDone(state, id) {
      const index = state.todoList.findIndex((item) => item.id == id);
      console.log(state.todoList[index]);
      state.todoList[index].checked = !state.todoList[index].checked;
    },
  },
});
const app = createApp(App);

app.component("to-do-list", ToDoList);
app.component("add-todo", NewTodo);

app.use(store);
app.mount("#app");
