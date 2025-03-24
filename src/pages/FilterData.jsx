import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import NoProduct from '../assets/images/not_found.png'


const FilterData = () => {
    const filterProduts = useSelector(state=>state.product.filteredData)
  return (
    <div className="container mx-auto py-12 px-4 md:px-14 lg:px-24">
        {filterProduts.length >0 ?
        <>
        <h1 className="text-xl mb-5 text-center font-bold">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filterProduts.map((product,id)=>(
                <ProductCard key={id} product={product}/>
            ))}
        </div>
        </> 
        : 
        <div className='flex justify-center'>
            <img src={NoProduct} alt="NoProduct"/>
        </div>
        }
        
      </div>
  )
}

export default FilterData