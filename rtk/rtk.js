const store = require('./app/store');
const {counterActions} = require('./features/counter/counterSlice');


console.log(`Initial State => ${JSON.stringify(store.getState())}`);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());