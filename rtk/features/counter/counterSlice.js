const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 5;
            console.log(`Increment ==========> ${JSON.stringify(action)}`);
            console.log(`Increment ==========> ${action.type}`);
        },
        decrement: (state, action) => {
            state.count -= 5;
            console.log(`Decrement ==========> ${JSON.stringify(action)}`);
            console.log(`Decrement ==========> ${action.type}`);
        }
    }
})

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;