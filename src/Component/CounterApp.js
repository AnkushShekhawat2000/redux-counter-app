import React from "react"
import {useDispatch, useSelector } from "react-redux"
import {increase, decrease, reset} from "../redux/actions/counterAction"
import counterReducer from "../redux/reducers/counterReducer"

const CounterApp = () =>{


   const count = useSelector(state => state.counter) // helping to get the cuurent value from the store
console.log(count);

   const dispatch  = useDispatch();

   function handleIncrease(){
    dispatch(increase());
    // dispatch({type: INCREASE})
   }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>

            <button onClick={()=>dispatch(reset())}>universal reset</button>
        </div>
    )
}

export default CounterApp