import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItems from "../components/CartItems";

const Cart = () => {
  //we use the redux cartSlice cart name to access the state
  const { cart } = useSelector((state) => (state));
  const [totalAmount, setTotalAmount] = useState(0);
  //here we use the useeffect because everytime cart value change then the total amt change
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));

  }, [cart])
  return (
    <div>
      {
        cart.length > 0 ?
          (<div className=" max-w-[920px] mx-auto flex flex-row mt-5   ">
            <div className="space-y-[20px] ">
              {
                cart.map((item, index) => (
                  <CartItems key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>
            <div className="flex flex-col justify-between  mt-10 ml-5">
              <div>
                <h4 className="text-green-600 font-extrabold">YOUR CART</h4>
                <h1 className="text-green-600 text-5xl  font-extrabold uppercase">summary</h1>
                <p className="text-[20px] text-gray font-bold">Total Items:{cart.length}</p>
              </div>
              {/*${totalamount} is use or not let find out */}
              <div>

                <p className="text-[20px] text-gray font-bold">Total Amount: ${totalAmount}</p>
                <button className="border-2 border-black  p-2 rounded-md bg-green-600 text-white  font-bold">CHECKOUT</button>
              </div>

            </div>
          </div>) :
          (<div className="flex flex-row justify-center items-center min-h-screen gap-x-7">
            
              <div className="text-2xl font-extrabold "> <p>Cart Is Empty</p></div>
              <div>
                <NavLink to="/">
                  <button className="border-2 border-black  p-2 rounded-md bg-green-600 text-white  font-bold" >Shop Now</button>
                </NavLink>
              </div>
             
          </div>)
      }

    </div>

  )
}

export default Cart;