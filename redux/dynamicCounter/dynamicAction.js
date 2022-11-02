const {DYNAMIC_INCREMENT, DYNAMIC_DECREMENT} = require("./dynamicActionTypes");

const dynamicIncrement = () => {
    return {
        type: DYNAMIC_INCREMENT
    }
}

const dynamicDecrement = () => {
    return {
        type: DYNAMIC_DECREMENT
    }
}

module.exports = {
    dynamicIncrement, dynamicDecrement
}