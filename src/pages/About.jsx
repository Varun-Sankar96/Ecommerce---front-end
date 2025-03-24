import React from 'react'
import aboutImg from '../assets/images/about_img.png'

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-14 lg:px-24  ">
          <h1 className="text-center text-xl font-bold mb-8">About Us</h1>
          <div className="sm:flex items-center justify-center gap-x-10 ">
            <div className=' mb-8 flex'>
              <img className="h-110" src={aboutImg} alt="aboutImg" />
            </div>
            <div className="mb-20 w-1/2  space-y-10">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil porro minima nulla voluptatibus laborum, ratione dolore voluptatem. Quo eveniet necessitatibus fugiat delectus ipsa, laudantium reprehenderit excepturi ipsum maiores porro.
              Perferendis incidunt dignissimos labore, eveniet,  Odio, fuga eum!</p>
             <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil porro minima nulla voluptatibus laborum, ratione dolore voluptatem. Quo eveniet necessitatibus fugiat delectus ipsa, laudantium reprehenderit excepturi ipsum maiores porro.
             Perferendis incidunt dignissimos labore, eveniet,  Odio, fuga eum!</p>
              
              <div>
                <h3 className='font-semibold text-lg hover:underline'>Our Mission</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil porro minima nulla voluptatibus laborum, ratione dolore voluptatem. Quo eveniet necessitatibus fugiat delectus ipsa, laudantium reprehenderit excepturi ipsum maiores porro.
             Perferendis incidunt dignissimos labore, eveniet,  Odio, fuga eum!</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-2xl font-bold mt-2'>WHY CHOOSE US</h1>
            <div className='mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='border border-gray-300 shadow-xl'>
                    <div className='px-8 py-4 mt-10 flex flex-col justify-center items-center space-y-4'>
                    <h4 className='font-semibold text-lg  '>Quality Assurance:</h4>
                    <p className='text-gray-700'>We meticulously select and wet each product to ensure it meets our stringent quality standards.</p>
                    </div>
                    
                </div>
                <div className='border border-gray-300 shadow-xl'>
                <div className='px-8 py-4 mt-10 flex flex-col justify-center items-center space-y-4'>
                    <h4 className='font-semibold text-lg  '>Convenience:</h4>
                    <p className='text-gray-700'>With our user-friendly inteface and hassle-free ordering process, shopping has ever been easier.</p>
                    </div>
                </div>
                <div className='border border-gray-300 shadow-xl'>
                <div className='px-8 py-4 mt-10 flex flex-col justify-center items-center space-y-4'>
                    <h4 className='font-semibold text-lg  '>Exceptional Customer Service:</h4>
                    <p className='text-gray-700'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
    
  )
}

export default About