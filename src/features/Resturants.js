import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState={
    loading:false,
    restaurants:[],
    error:"",
}

export const fetchRestaurant=createAsyncThunk("restaurant/fetchRestaurant",async()=>{
    return await axios
    .get("https://632eb541b7314fc02f48d2d2.mockapi.io/restaurants")
    .then((resp)=>resp.data);
})

const restaurantSlice=createSlice({
    name:"restaurant",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
           state.loading=false;
           state.restaurants=action.payload;
           state.error="";
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading=false;
            state.restaurants=[];
            state.error=action.error.message;
        })
    }
})
export default restaurantSlice.reducer;