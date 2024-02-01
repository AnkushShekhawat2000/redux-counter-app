import {createStore, combineReducers} from "redux";
import counterReducer from "./reducers/counterReducer";
import songReducer from "./reducers/songReducer";

const rootReducer = combineReducers(
    {
    counter:counterReducer,
    song:songReducer
   }
)

const store = createStore(rootReducer)  // 0

export default store

// dispatch({type:CLICKED_SONG, payload:song})
// songReducer(null, {type: CLICKED_SONG, payload:song})


// step1:
// counterReducer(undefined, undefined)

// counterReducer( ) => 0

// dispatch({type: INCREASE})
// counterReducer(0, {type:INCREASE}) =>1

// dispatch({type: INCREASE})
// counterReducer(0, {type:INCREASE}) =>2