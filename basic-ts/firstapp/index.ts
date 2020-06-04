import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// To define a structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  // Res.data has properties of:
  // id
  // title
  const { id, title, completed } = res.data as Todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
