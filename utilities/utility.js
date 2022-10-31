const fetch = require("node-fetch");

const fetchTodos = async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');

    const todos = await response.json();
    // console.log(todos);

    dispatch({
        type: 'todos/todoLoaded',
        payload: todos
    });

    console.log(`Number of todos: ${getState().todos.length}`);
}
module.exports = {
    fetchTodos
}