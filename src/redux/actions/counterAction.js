import {INCREASE, DECREASE, RESET} from "./actionTypes"

// actions

// in real use => actions are object

// action Creators

export const increase = (value=1) =>{
    return {
        type: INCREASE,
        value:value
    }
}

export const decrease = () =>{
    return {
        type: DECREASE
    }
}

export const reset = () =>{
    return {
        type: RESET
    }
}