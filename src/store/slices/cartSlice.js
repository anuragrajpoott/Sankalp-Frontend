import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totalItems : localStorage.getItem("total-items") ? JSON.parse(localStorage.getItem("total-items") ) : 0
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        setTotalItems(state,action){
             state.token = action.payload
        }
    }

})

export const {setTotalItems} = cartSlice.actions;
export default cartSlice.reducer 