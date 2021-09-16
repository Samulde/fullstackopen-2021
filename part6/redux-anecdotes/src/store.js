import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import combinedReducers from './reducers/reducers'
import thunk from 'redux-thunk'

const store = createStore(
    combinedReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
  )

export default store