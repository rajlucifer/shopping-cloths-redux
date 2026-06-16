import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";



//here we write the configurationStore which contain the object in the function  where we write the reducres 
export  const Store = configureStore({
    reducer:{
        // cart is  name and value is CartSlice
        cart :CartSlice.reducer,
    }

});
