import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import  { useEffect } from "react";
import { setProducts } from "../redux/productSlice";
import { mockData } from "../assets/Mockdata";
import ProductCard from '../components/ProductCard';




const Shop = () => {

const getProducts = useSelector(state=>state.product)
const dispatch = useDispatch()
useEffect(()=>{
        dispatch(setProducts(mockData))
    },[])



  return (
    <div className="container mx-auto py-12 px-4 md:px-14 lg:px-24">
        <h1 className="text-xl mb-5 text-center font-bold">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {getProducts.products.map((product,id)=>(
                <ProductCard key={id} product={product}/>
            ))}
        </div>
      </div>
  )
}

export default Shop