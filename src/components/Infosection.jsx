import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";


const Infosection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast />,
      title: "Free Shiping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className=" bg-white pb-8 pt-4">
      <div className="  container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col items-center text-center border border-gray-300
                          rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-red-600 mt-4 text-2xl">{item.icon}</div>
              <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>
              <p className="mt-4 text-gray-600">{item.description}</p> 
            </div>
          );
        })}
      </div>
       
    </div>
  );
 
};

export default Infosection;
