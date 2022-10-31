const {createStore, applyMiddleware} = require("redux");
const {delayMiddleware, fetchTodosMiddleware} = require("./middlewares/middleware");

// Initial state
const initialState = {
    todos: []
}

// Reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/todoAdded':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload
                    }
                ]
            }
        case 'todos/todoLoaded':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    ...action.payload
                ]
            }
    }
}

// Store
const store = createStore(todoReducer, applyMiddleware(delayMiddleware, fetchTodosMiddleware));

// Subscribe to store change
store.subscribe(() => {
    console.log(store.getState());
})

// Dispatch Actions
// store.dispatch({
//     type: 'todos/todoAdded',
//     payload: 'Lear With SOURAV'
// })

// Dispatch Actions Fetched from server
store.dispatch({
    type: 'todos/todoFetched',
})