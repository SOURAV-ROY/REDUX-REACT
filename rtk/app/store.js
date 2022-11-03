const {configureStore} = require('@reduxjs/toolkit');
const counterReducer = require('../features/counter/counterSlice');
const dynamicCounterReducer = require('../features/dynamicCounter/dynamicCounterSlice');
const postReducer = require('../features/post/postSlice');
const {createLogger} = require('redux-logger')

const reduxLogger = createLogger();
// Configure Store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        post: postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger)
})

module.exports = store;