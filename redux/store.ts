import { configureStore, createStore } from '@reduxjs/toolkit'
import rootReducer from './root-reducer'
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(rootReducer, composeWithDevTools())

export {store}