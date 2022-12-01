import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import { combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "./Resturants";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';



const persistConfig={
    key:"root",
    version:1,
    storage
};


const reducer = combineReducers({
  restaurants: restaurantReducer,
  cart: cartReducer,
  product: productReducer,
});


const persistedReducer=persistReducer(persistConfig,reducer)

const store = configureStore({
  reducer:persistedReducer
});

export default store;
