import anecdoteReducer from "./anecdoteReducer";
import notificationReducer from "./notificationReducer";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
    anecdotes: anecdoteReducer,
    message: notificationReducer
})

export default combinedReducers
