import { createSlice } from "@reduxjs/toolkit";



//first we create the creatSlice where in this function we write the oject which contain the 3 things
export const  CartSlice = createSlice({
    name:"cart",
    initialState:[],
    //inside the reducers we write the oject which contain all the funtion 
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
            //action.payload hold the post information that you want to insert
        },
        remove:(state,action)=>{
            return state.filter((post)=> post.id!==action.payload)
        }

    }

});
//this is most important thing to access the function
export const{add,remove} = CartSlice.actions;

export default CartSlice.reducer;