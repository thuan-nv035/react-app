import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import multipleReducer from "./multipleReducer";
import productReducer from "./productReducer";


export default combineReducers({
    counter: counterReducer,
    mutiple: multipleReducer,
    product: productReducer
})