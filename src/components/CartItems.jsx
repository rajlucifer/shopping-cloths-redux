import React from "react";
import toast from "react-hot-toast";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {remove} from "../redux/slices/CartSlice"

const CartItems =({item})=>{
  const dispatch = useDispatch();
  const removeItem = ()=>{
    dispatch(remove(item.id));
    toast.success("successfully Removed");

  };
  return(
    <div  className="border-b-2 border-gray-600  p-3 flex flex-row items-center justify-between ">
      <div className=" w-[200px] h-[200px] ">
        <img src={item.image} className="w-full h-full object-contain"></img>
      </div>
      <div>
        <p className="font-bold">{item.title.split(" ").slice(0,4).join(" ")+"..."}</p>
        <p className="w-[450px]">{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        <div className="flex flex-row w-full justify-between p-2">
          <p className="text-green-600 font-bold">${item.price}</p>
          <div className="w-6 h-6 rounded-full bg-red-300 flex items-center justify-center" onClick={removeItem}>
            <RiDeleteBinLine className="text-red-800  " />
          </div>
          
        </div>
      </div>
    </div>

  )
}
export default CartItems;