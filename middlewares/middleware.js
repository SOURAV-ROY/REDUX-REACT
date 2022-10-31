const fetch = require('node-fetch');

const delayMiddleware = (store) => (next) => (action) => {
    if (action.type === 'todos/todoAdded') {
        console.log('I am delayMiddleware');

        // const startTime = performance.now()
        setTimeout(() => {
            next(action);
        }, 2000)
        // const endTime = performance.now()

        // console.log(`Start time ${startTime} <=> End time ${endTime}`);
        // console.log(`Function Took => ${endTime - startTime} milliseconds`);

        return;
    }
    return next(action);
}

const fetchTodosMiddleware = (store) => (next) => async (action) => {
    if (action.type === 'todos/todoFetched') {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

        const todos = await response.json();
        // console.log(todos);

        store.dispatch({
            type: 'todos/todoLoaded',
            payload: todos
        });

        console.log(`Number of todos: ${store.getState().todos.length}`);

        return;
    }
    return next(action);
}

module.exports = {delayMiddleware, fetchTodosMiddleware}