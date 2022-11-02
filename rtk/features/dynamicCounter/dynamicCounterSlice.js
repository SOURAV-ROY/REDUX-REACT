const {createSlice} = require('@reduxjs/toolkit');
const {counterActions} = require('../counter/counterSlice');

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
    },
    // extraReducers: {
    //     ['counter/increment']: (state, action) => {
    //         state.count += 100;
    //         console.log(`ExtraReducers ==> ${JSON.stringify(action)}`);
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(counterActions.increment, (state, action) => {
            state.count += 100;
            console.log(`ExtraReducers ==> ${JSON.stringify(action)}`);
        })
    }
})

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;