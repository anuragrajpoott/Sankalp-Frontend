import { combineReducers } from "@reduxjs/toolkit"; 
import authReducer from "../store/slices/authSlice"
import userReducer from "../store/slices/userSlice"
import cartReducer from "../store/slices/cartSlice"

const reducers = combineReducers({
    auth:authReducer,
    user:userReducer,
    cart:cartReducer
})

export default reducers