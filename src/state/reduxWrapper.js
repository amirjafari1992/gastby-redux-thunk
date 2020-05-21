import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "."
// import {loadDevTools} from './reduxDevTools'



const middleware = [thunk]
const createReduxStore = (initialState = {}) => createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)))
const store = createReduxStore() // create store by calling the above function
// rest of code

export default ({ element }) => <Provider store={store}>{element}</Provider>
