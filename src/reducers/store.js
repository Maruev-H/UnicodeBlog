import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { categoriesReducer } from "./categoriesReduser";
import { postsReducer } from "./postsReducer";


const rootResucer = combineReducers({
    posts: postsReducer,
    categories: categoriesReducer,
})
export const store = createStore(rootResucer, applyMiddleware(thunk))