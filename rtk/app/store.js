const {configureStore} = require('@reduxjs/toolkit');
const counterReducer = require('../features/counter/counterSlice');

// Configure Store
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

module.exports = store;