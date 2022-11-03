const store = require('./app/store');
// const {counterActions} = require('./features/counter/counterSlice');
// const {dynamicCounterActions} = require('./features/dynamicCounter/dynamicCounterSlice');
const {fetchPosts} = require('./features/post/postSlice');


// console.log(`Initial State => ${JSON.stringify(store.getState())}`);

// store.subscribe(() => {
//     console.log(store.getState());
// });

// Dispatch Actions
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());
//
// store.dispatch(dynamicCounterActions.increment(10));
// store.dispatch(dynamicCounterActions.increment(10));
// store.dispatch(dynamicCounterActions.decrement(5));

// Dispatch from post slice
store.dispatch(fetchPosts());