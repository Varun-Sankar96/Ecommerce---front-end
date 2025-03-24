import React, { useEffect } from "react";
import { categories, mockData } from "../assets/Mockdata";
import HeroImg from "../assets/images/hero.jpg";
import Infosection from "../components/Infosection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch,useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";



const Home = () => {
 const dispatch = useDispatch()
const getProducts = useSelector(state=>state.product)

    useEffect(()=>{
        dispatch(setProducts(mockData))
    },[])
    
    
    

  return (
    <div>
    <div className="bg-white mt-2 px-4 md:px-14 lg:px-24 ">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-5">
        <div className="w-full md:w-3/12 ">
          <h2 className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </h2>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {categories.map((item, index) => (
              <li
                className="flex items-center text-sm font-medium "
                key={index}
              >
                <div className="h-2 w-2 border border-red-500 rounded-full mr-2 "></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:9/12 mt-8 md:mt-0 h-120 relative ">
          <img className=" h-full w-full " src={HeroImg} alt="HeroImg" />
          <div className="absolute top-16 left-8">
            <h2 className="text-gray-600  text-3xl font-bold">
              Welcome to Shopify
            </h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800 ">
              Medal Worthy Brands To Bag
            </p>
            <button className="bg-red-600 px-8 py-2.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <Infosection />
      <CategorySection/>

      <div className="container mx-auto py-12">
        <h1 className="text-xl mb-2 text-center font-bold">Top Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {getProducts.products.slice(0,5).map((product,id)=>(
                <ProductCard key={id}   product={product}/>
            ))}
        </div>
      </div>
    </div>
    <Shop/>
    </div>
    
  );
};

export default Home;
