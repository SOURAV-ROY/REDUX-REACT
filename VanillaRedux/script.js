// Array Reduce Method use
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const arrayReducer = array.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
// }, 0)
// console.log(arrayReducer);
// ********************************************************************************

const actions = [
    {type: "increment", payload: 1},
    {type: "increment", payload: 1},
    {type: "increment", payload: 1},
    {type: "decrement", payload: 1},
    {type: "decrement", payload: 1},
]

const initialState = {
    value: 0
}

const counterReducer = (state, action) => {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - action.payload
        }
    }
    return state;
}

const finalResult = actions.reduce(counterReducer, initialState);
console.log(finalResult);
