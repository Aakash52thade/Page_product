import React, { useState } from 'react'
import {data} from '../data/Data';

function Food() {
    // console.log(data);

    const [foods, setFoods] = useState(data);

    //filter the food on the basis of Category;
    const filterType = (category) => {
      setFoods(
        data.filter((item) => {
          return item.category === category;
        })
      );
    };

    
    //filter the food on the basis of  Price;
    const filterPrice = (price) => {
      setFoods(
        data.filter((item) => {
          return item.price === price;
        })
      );
    };




  return (
    
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-400 text-4xl font-bold flex justify-center mb-[3rem]'>Top Rated Menu Items</h1>

        {/* Filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter type */}
          <div>
            
             <div className='flex justify-between flex-wrap ml-[5rem] gap-x-6 '>
               <button onClick={() => setFoods(data)} className='m-1 rounded-lg bg-orange-300 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300'>All</button>
               <button onClick={() => filterType('burger')} className='m-1 rounded-lg bg-orange-300 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300'>Burger</button>
               <button onClick={() => filterType('pizza')} className='m-1 rounded-lg bg-orange-300 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300'>Pizza</button>
               <button onClick={() => filterType('salad')} className='m-1 rounded-lg bg-orange-300 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300'>Salad</button>
               <button onClick={() => filterType('chicken')} className='m-1 rounded-lg bg-orange-300 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300'>chicken</button>
             </div>
          </div>

          {/* Filter price */}
            <div>
             
              <div className='flex justify-between max-w-[300px] w-full mr-[4rem]'>
                <button onClick={() => filterPrice('$')} className='m-1 rounded-lg bg-orange-300 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300'>$</button>
                <button onClick={() => filterPrice('$$')} className='m-1 rounded-lg bg-orange-300 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300'>$$</button>
                <button onClick={() => filterPrice('$$$')} className='m-1 rounded-lg bg-orange-300 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300'>$$$</button>
                <button onClick={() => filterPrice('$$$$')} className='m-1 rounded-lg bg-orange-300 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300'>$$$$</button>
              </div>
            </div>   
        </div>

        {/* display foods */}
        
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 p-[1rem] pt-4'>
        {foods.map((item, index) => (
          <div key={index}  className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} 
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <div className='flex flex-col'>
               <p className='font-bold pb-5'>{item.name}</p>
               <p>{item.desc.split(" ").slice(0,10).join(" ") + "..."}</p>
              </div>
              <p >
                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>

              </p>
            </div>
          </div>
        ) )}

        </div>

    </div>
  )
}

export default Food