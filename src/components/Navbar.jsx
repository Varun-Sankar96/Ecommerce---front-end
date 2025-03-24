import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Model";
import Register from "./Register";
import Login from "./Login";
import { setSearchTerm } from "../redux/productSlice";


const Navbar = () => {
  // hooks
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //states
  const [isModelOpen,setIsModelopen] = useState(false)
  const [isLogIn, setIsLogIn] = useState(true)
  const [search , setSearch] = useState()


  //functions
  const openSignup = ()=>{
    setIsLogIn(false)
    setIsModelopen(true)
  }
  const openLogin = ()=>{
    setIsLogIn(true)
    setIsModelopen(true)

  }  
  const handleSearch = (e)=>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filterData')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-14 lg:px-24 py-4 flex justify-between items-center">
        <div>
          <Link to={"/"} className="text-lg font-bold">
            Shopify
          </Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="w-full border-2 py-2 px-4 border-gray-300"
              onChange={(e)=>setSearch(e.target.value)}
            />
          </form>
          <FaSearch onClick={handleSearch} className="absolute top-3 right-3 text-red-500" />
        </div>
        <div className="flex gap-5 items-center">
          <Link className="relative" to={"/cart"}>
            <FaShoppingCart className="text-xl " />
            {products.length > 0 &&(
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex items-center justify-center text-white">{products.length}</span>
            )}
          </Link>
          <button onClick={()=> setIsModelopen(true)} className=" hidden md:block cursor-pointer">Login | Register</button>
          <button>
            <FaUser onClick={()=> setIsModelopen(true)} className="block md:hidden cursor-pointer" /> 
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10 py-4  font-bold">
        <Link
          to={"/"}
          className="relative after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in hover:after:w-full"
        >
          Home  
        </Link>
        <Link
          to={"/shop"}
          className="relative after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in hover:after:w-full"
        >
          Shop
        </Link>
        <Link
          to={"/contact"}
          className="relative after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in hover:after:w-full"
        >
          Contact
        </Link>
        <Link
          to={"/about"}
          className="relative after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in hover:after:w-full"
        >
          About
        </Link>
      </div>
      <Model isModelOpen={isModelOpen} setIsModelopen={setIsModelopen}>{isLogIn?<Login openSignup={openSignup}/> : <Register openLogin={openLogin}/>}</Model>
      
    </nav>
  );
};

export default Navbar;
