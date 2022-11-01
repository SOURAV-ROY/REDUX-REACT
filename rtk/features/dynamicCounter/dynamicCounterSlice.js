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

            console.log(`Dynamic Increment => ${action.type}`)
        },
        decrement: (state, action) => {
            state.count -= action.payload;

            console.log(`Dynamic Decrement => ${action.type}`);
        }
    }
})

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;