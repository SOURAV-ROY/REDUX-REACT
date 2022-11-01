const store = require('./store');
const {increment, decrement} = require('./counter/action');

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());