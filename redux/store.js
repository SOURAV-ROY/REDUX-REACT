const {createStore, combineReducers} = require('redux');
const counterReducer = require('./counter/reducer');
const dynamicCounterReducer = require('./dynamicCounter/dynamicReducer');

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer
});

const store = createStore(rootReducer);

module.exports = store;