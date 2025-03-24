import React from "react";
import MenImg from "../assets/images/men.jpg";
import WomenImg from "../assets/images/women.jpg";
import KidImg from "../assets/images/kids.jpg";

const CategorySection = () => {
  const categories = [
    { title: "Men", Imgurl: MenImg },
    { title: "Women", Imgurl: WomenImg },
    { title: "Kids", Imgurl: KidImg },
  ];

  return (
  <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6   "> 
    {categories.map((item,index)=>(
        <div className="  relative transform transition-transform duration-300 hover:scale-105 cursor-pointer" key={index}>
            <img className="h-full w-full object-cover rounded-lg shadow-xl " src={item.Imgurl} alt="itemImgUrl"/>
            <div className="absolute top-20 left-12">
                <p className="text-xl font-bold">{item.title}</p>
                <p className="text-gray-600">View All</p>
            </div>
        </div>
    ))}
  </div>

);
};

export default CategorySection;
