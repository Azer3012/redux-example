import { combineReducers } from "redux";
import countReducer from "./counter";
import todosReducer from "./todos";

const allReducers=combineReducers({
    counter:countReducer,
    todos:todosReducer
})

export default allReducers;