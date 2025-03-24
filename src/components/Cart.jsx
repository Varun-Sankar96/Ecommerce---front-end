import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notfound from "../assets/images/no-product-found.png";
import { FaTrash } from "react-icons/fa";
import Model from "./Model";
import ChangeAddress from "./ChangeAddress";
import { decreaseQuantity, increaseQuantity, removeItemFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";




const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address,setAddress]= useState('main street,mettupalayam,600021')
  const [isModelOpen, setIsModelopen] = useState(false)
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items.center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>

                <div className="flex lg:space-x-12 space-x-3 ">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              {/* <div/> */}
              {cart.products.map((product, id) => (
                <div
                  key={id}
                  className="flex items.center justify-between p-3 border-b"
                >
                  <div className="md-flex items-center space-x-4">
                    <img
                      className="w-16 h-16 object-contain rounded"
                      src={product.image}
                      alt="productImage"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex lg:space-x-12 space-x-3 items-center ">
                    <p>₹{product.price}</p>
                    <div className="flex items-center justify-center border">
                      <button onClick={()=>dispatch(decreaseQuantity(product.id))} className="text-xl font-bold px-1.5 border-r">
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button onClick={()=>dispatch(increaseQuantity(product.id))} className="text-xl px-1 border-l">+</button>
                    </div>
                    <p>₹{(product.quantity * product.price).toFixed(2)}</p>
                    <button className="text-red-500 hover:text-red-700"
                    onClick={()=> dispatch(removeItemFromCart(product.id))}>
                      <FaTrash  />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 sm:mt-6 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-1">
                <p>Shipping:</p>
                <p className="ml-2">Shipping to:</p>
                <span className="text-xs font-bold">{address}</span>
                <button className="text-blue-500 hover:underline mt-1 ml-15 cursor-pointer"
                onClick={()=>setIsModelopen(true)}
                >Change Address</button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>₹{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button onClick={()=>Navigate('/checkout')} className="w-full bg-red-600 text-white py-2 hover:bg-red-800">Proceed to checkout</button>
            </div>
          </div>
          <Model isModelOpen={isModelOpen} setIsModelopen={setIsModelopen}><ChangeAddress setAddress={setAddress} setIsModelopen={setIsModelopen}/></Model>
        </div>

      ) : (
        <div className="flex justify-center">
          <img className="h-96" src={Notfound} alt="Notfound" />
        </div>
      )}
    </div>
  );
};

export default Cart;
    