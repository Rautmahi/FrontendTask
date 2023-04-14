import {  applyMiddleware, compose,legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from "./App/reducer"

const composer =window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose



export const store = legacy_createStore(reducer, composer(applyMiddleware(thunk)))