const {createStore, applyMiddleware} = require("redux");
const {delayMiddleware, fetchAsyncMiddleware} = require("./middlewares/middleware");
const {fetchTodos} = require("./utilities/utility");

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
const store = createStore(todoReducer, applyMiddleware(delayMiddleware, fetchAsyncMiddleware));

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
// store.dispatch({
//     type: 'todos/todoFetched',
// })

store.dispatch(fetchTodos);