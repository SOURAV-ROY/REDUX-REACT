const store = require('./app/store');
// const {counterActions} = require('./features/counter/counterSlice');
const {dynamicCounterActions} = require('./features/dynamicCounter/dynamicCounterSlice');


console.log(`Initial State => ${JSON.stringify(store.getState())}`);

store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch Actions
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

store.dispatch(dynamicCounterActions.increment(10));
store.dispatch(dynamicCounterActions.increment(10));
store.dispatch(dynamicCounterActions.decrement(5));