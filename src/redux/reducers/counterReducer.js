import {INCREASE, DECREASE, RESET} from "../actions/actionTypes"

const initialState = 0;

const counterReducer = (state=initialState , action) => {
    console.log("Counter Reducer is executed", state, action)
     
    switch(action.type){
        case INCREASE:
            return state+1

        case DECREASE:
            return state-1

        case RESET:
            return 0   

        default:
            return state         
    }

}


// CounterReducer(undefined, undefined)  => undefined
// so we need give the intial value before execute then undefined not come


// CounterReducer(100, {type:INCREASE})
// CounterReducer(100, {type:DECREASE})
// CounterReducer(100, {type:RESET})


export default counterReducer