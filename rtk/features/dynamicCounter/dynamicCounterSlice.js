const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
    count: 0
}

const dynamicCounterSlice = createSlice({
    name: 'dynamicCounter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
            console.log(`Dynamic Increment ===========> ${JSON.stringify(action)}`);
            console.log(`Dynamic Increment Payload ===========> ${action.payload}`);
        },
        decrement: (state, action) => {
            state.count -= action.payload;
            console.log(`Dynamic Decrement ===========> ${action.type}`);
            console.log(`Dynamic Decrement Payload ===========> ${action.payload}`);
        }
    }
})

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;