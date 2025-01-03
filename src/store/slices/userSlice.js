import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null
}

const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUser(state,action){
             state.token = action.payload
        }
    }

})

export const {setUser} = userSlice.actions;
export default userSlice.reducer 