import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";


const Checkout = ({setOrder}) => {
  const [billToggle, setBillToggle] = useState(true);
  const [shipToggle, setShipToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state)=> state.cart)

  const [shippingInfo , setShippingInfo] = useState({
    address:'',
    city:'',
    zip:''
  })
  
  

  const navigate = useNavigate()

  const handleOrder=()=>{
    const newOrder= {
        products: cart.products,
        orderNumber: '123456',
        shippingInformation: shippingInfo,
        totalPrice: cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order-conformation') 
    
  }

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <div>
        <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          <div className="md:w-2/3">
            {/* billing info */}

            <div className="border-2 border-gray-300 shadow-xl p-2 mb-6">
              <div
                className="flex items-center justify-between"
                onClick={() => setBillToggle(!billToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Billing Information
                </h3>
                {billToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`space-y-4 ${billToggle ? "" : "hidden"}`}>
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border-2 border-gray-300 shadow-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border-2 border-gray-300 shadow-md"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input
                    className="w-full px-3 py-2 border-2 border-gray-300 shadow-md"
                    type="text"
                    placeholder="Enter Phone number"
                  />
                </div>
              </div>
            </div>

            {/* Shipping info */}
            <div className="border-2 border-gray-300 shadow-xl p-2 mb-6">
              <div
                className="flex items-center justify-between"
                onClick={() => setShipToggle(!shipToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Shiping Information
                </h3>
                {shipToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`space-y-4 ${shipToggle ? "" : "hidden"}`}>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="w-full px-3 py-2 border-2 border-gray-300 shadow-md"
                    onChange={(e)=>setShippingInfo({...shippingInfo , address:e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="email"
                    placeholder="Enter city"
                    className="w-full px-3 py-2 border-2 border-gray-300 shadow-md"
                    onChange={(e)=>setShippingInfo({...shippingInfo , city:e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700">ZipCode</label>
                  <input
                    className="w-full px-3 py-2 border-2 border-gray-300 shadow-md "
                    type="text"
                    placeholder="Enter ZipCode"
                    onChange={(e)=>setShippingInfo({...shippingInfo , zip:e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* payment info */}

            <div className="border-2 border-gray-300 shadow-xl p-2 mb-6">
              <div
                className="flex items-center justify-between"
                onClick={() => setPaymentToggle(!paymentToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                <div className="flex items.center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="block text-gray-700 ml-2">
                    Cash On Delivery
                  </label>
                </div>

                <div className="flex items.center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "DC"}
                    onChange={() => setPaymentMethod("DC")}
                  />
                  <label className="block text-gray-700 ml-2">Debit Card</label>
                </div>

                {paymentMethod === "DC" && (
                  <div className="bg-gray-200 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Card Information
                    </h3>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Card Number"
                        className="border-2 border-gray-500   p-2 w-full rounded bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Card Holder Name"
                        className="border-2 border-gray-500 p-2 w-full rounded bg-white"
                        required
                      />
                    </div>
                    <div className="flex items-center w-full  mb-4">
                      <div className=" mr-2 w-1/2">
                        <label className="block text-gray-700 font-semibold mt-3">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="border-2 border-gray-500 p-2 w-full rounded mt-3 bg-white"
                          required
                        />
                      </div>
                      <div className=" ml-2 w-1/2">
                        <label className="block text-gray-700 font-semibold mt-3">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="Enter CVV "
                          className="border-2 border-gray-500 p-2 w-full rounded mt-3 bg-white"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>



          <div className="md:w-1/3 sm:mt-6 bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product)=>(
                    <div key={product.id} className="flex justify-between">
                        <div className="flex items-center">
                            <img src={product.image} alt="productImg" className="w-16 h-16 object-contained rounded"/>
                        </div>
                        < div className="ml-4">
                            <h4 className="text-md font-semibold">{product.name}</h4>
                            <p className="text-gray-600">₹{product.price} x {product.quantity}</p>
                        </div>

                    </div>
           
           
                )   
            )}
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
                <span>Total Price:</span>
                <span className="font-semibold">₹{cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800" onClick={handleOrder}>Place Order</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
