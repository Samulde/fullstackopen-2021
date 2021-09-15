import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import combinedReducers from './reducers/reducers'

const store = createStore(
    combinedReducers,
    composeWithDevTools()
  )


export default store