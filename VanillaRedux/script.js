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
    {type: "immutable", payload: 50},
]

const initialState = {
    value: 0,
    properties: {
        a: 10,
        b: 20
    }
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
    else if (action.type === "immutable") {
        return {
            ...state,
            // value: state.value - action.payload
            properties:{
                ...state.properties,
                a: state.properties.a + 10,
                b: state.properties.b + 15
            }
        }
    }
    return state;
}

const finalResult = actions.reduce(counterReducer, initialState);
console.log(finalResult);

// Primitive value immutable
// let a = 10, b = 20;
// let b = a;
// let b = 5;
// console.log(a)
// console.log(b)

// Reference value mutable
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[1] = 5;

// console.log(arr1)
console.log(arr2)