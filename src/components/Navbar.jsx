import React from 'react';
import log from '../assets/logo.png'

import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ }) => {
    //we use cart because it store the state 
    const { cart } = useSelector((state) => (state));
    return (
        <div className='w-full  bg-blue-950'>
            <nav className='w-7/12 mx-auto  flex flex-row justify-between p-[10px] items-center'>

                <NavLink to="/">
                    <img src={log} width="150px" height="150px"></img>
                </NavLink>



                <div className='flex flex-row gap-4  '>
                    <NavLink to="/">
                        <span className='text-white'>HOME</span>
                    </NavLink>

                    <NavLink className="relative" to="/cart">
                        <FaCartShopping className='  h-[30px] w-[30px] text-white hover:text-green-600' />
                        {
                            cart.length > 0 && <div className='absolute  flex top-[-5px] right-[-7px] border-2 w-5 h-5 rounded-full bg-green-600  animate-bounce items-center justify-center  ' ><div className='  font-bold text-white  '>{cart.length}</div></div>
                        }
                    </NavLink>


                </div>



            </nav>
        </div>
    )
}

export default Navbar;