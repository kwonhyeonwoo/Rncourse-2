import { InitialState } from "@react-navigation/native";
import { createSlice } from "@reduxjs/toolkit";



const initialState :{
    ids:string[];
} ={
    ids:[],
}

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    add:(state,action)=>{
        state.ids = [...state.ids,action.payload];
    },
    remove:(state,action)=>{
        state.ids = state.ids.filter((id)=>id !== action.payload)
    }
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice.reducer;