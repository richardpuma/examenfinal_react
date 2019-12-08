import { createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {postReducer, productReducer} from "./reducers"
export default createStore(
  combineReducers({postReducer, productReducer}),
  composeWithDevTools(applyMiddleware(thunk))
)
