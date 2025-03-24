import React from "react";
import { FaStar } from "react-icons/fa";
import { addItemToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";



const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  const handleAddToCart = (e, product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addItemToCart(product))
    Swal.fire({
      // title: "Good job!",
      text: "Product Added Successfully",
      icon: "success"
    });
    // alert("Product Added Successfully")

  }


  return (
    <Link to={`/product/${product.id}`}>
    <div className="bg-white p-4 shadow-xl rounded border border-gray-300 transform transition-transform duration-300 hover:scale-105">
      <img
        className="w-full h-48 object-contain mb-4"
        src={product.image}
        alt="productImage"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">₹{product.price}</p>
      <div className="flex item-center mt-2">
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
      </div>
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 group
                        bg-red-600 text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all cursor-pointer"
                        onClick={(e)=>handleAddToCart(e, product)}
      >
        <span className="group-hover:hidden text-2xl">+</span>
        <span className="hidden group-hover:block">Add to cart</span>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
