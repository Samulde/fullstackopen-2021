import anecdoteReducer from "./anecdoteReducer";
import notificationReducer from "./notificationReducer";
import filterReducer
 from "./filterReducer";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
    anecdotes: anecdoteReducer,
    message: notificationReducer,
    filter: filterReducer
})

export default combinedReducers
