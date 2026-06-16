import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
//here the props is used {post}
const Product = ({ post }) => {
    const { cart } = useSelector((state) => state);

    const dispatch = useDispatch();

    const removeFromCart = () => {
        //we the function of add() from the reudx slice
        dispatch(remove(post.id));
        toast.error("Item Removed");
    };
    const addToCart = () => {
        dispatch(add(post));
        toast.success("Add To Cart");

    };


    return (
        // here the main problem is come from the 1 card to we have to do the mt-10 ml-5 for the 1 card
        <div className="flex flex-col shadow-[2px_2px_2px_gray]  items-center  justify-between border-2 border-gray-600 rounded-md p-2 mt-10  ml-5
        gap-3   hover:scale-110  transition duration-300 ease-in  ">
            <div className="text-[17px] font-extrabold text-gray-600">
                <p>{post.title.split(" ").slice(0, 3).join(" ") + "..."}</p>
            </div>
            <div className="w-40 text-left font-normal text-[12px] text-gray-600">
                <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
             
            <div className="w-[180px] h-[180px]">

                <img src={post.image} className="w-full h-full object-contain"></img>
            </div>
            {/* if we do the w-full the if we change the add to cart to remove the price text to mover */}
            <div className="flex flex-row gap-11 items-center justify-between w-full m-3">
                <div className="font-bold text-green-600">
                    <p>${post.price}</p>
                </div>
                <div>
                    {
                        cart?.some((p) => p.id === post.id)
                            ? (
                                <button className="border-2 border-gray-800 px-[14px] py-[7px] rounded-full font-bold hover:text-white hover:bg-black transition duration-300 ease-in "  onClick={removeFromCart}>
                                    Remove Item
                                </button>
                            )
                            : (
                                <button className="border-2 border-gray-800 px-[14px] py-[7px] rounded-full font-bold hover:text-white hover:bg-black transition duration-300 ease-in" onClick={addToCart}>
                                    Add To Cart
                                </button>
                            )
                    }
                </div>
            </div>
        </div>
    )
}
export default Product;