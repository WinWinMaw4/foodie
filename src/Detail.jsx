import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'
import {MdArrowBack} from 'react-icons/md'

import Loading from './component/Loading';

const Detail = () => {
  const {id} = useParams();
  const [meal,setMeal] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getSingleMeal = async ()=> {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    setMeal(data?.meals[0])
    setIsLoading(false);
}

useEffect(()=>{
  getSingleMeal();
},[])


  return (
    <>
         
          {isLoading? <Loading/>:(
           <div className="">
             <div className="container mx-auto py-3 px-2 mt-5 rounded-xl"> 
              <button onClick={()=>navigate(-1)} className="flex flex-row justify-center items-center">
                <MdArrowBack className="mr-3"/>
                Go Back To List
              </button>            
              </div>
              <div className='detailCard container mx-auto bg-black/[0.5] ring-1 ring-orange-400 ring-offset-8 ring-offset-neutral-700	border border-black  rounded-2xl overflow-hidden py-10 px-5 my-5'>
              <div className="">
              </div>
              <div className="flex flex-col md:flex-row  items-start ">
                <div>
                <img src={meal.strMealThumb} className="rounded-2xl" alt="" width={"300px"} />
                <div className="my-3">
                  {meal.strTags}
                </div>
                </div>
                <div className="w-full px-5">
                  <div className="flex flex-row justify-between items-center mb-3">
                    <h1 className='text-4xl text-orange-400'>{meal.strMeal}</h1>
                    <span className='text-xl'>{meal.strArea} Food</span>
                  </div>
                  <div className="text-white bg-pink-500 text-sm rounded-full inline-block px-3 mb-3">
                    {meal.strCategory}
                  </div>
                  <div className="mb-3">
                    <h1 className='text-2xl mb-2'>Ingredients</h1>
                    <div className="grid grid-rows-5 grid-flow-col gap-0 text-orange-200 w-3/4 tracking-tight">
                    <span className='flex ml-2'>{meal.strIngredient1} - {meal.strMeasure1}</span>
                    <span className='flex ml-2'>{meal.strIngredient2} - {meal.strMeasure2}</span>
                    <span className='flex ml-2'>{meal.strIngredient3} - {meal.strMeasure3}</span>
                    <span className='flex ml-2'>{meal.strIngredient4} - {meal.strMeasure4}</span>
                    <span className='flex ml-2'>{meal.strIngredient5} - {meal.strMeasure5}</span>
                    <span className='flex ml-2'>{meal.strIngredient6} - {meal.strMeasure6}</span>
                    <span className='flex ml-2'>{meal.strIngredient7} - {meal.strMeasure7}</span>
                    <span className='flex ml-2'>{meal.strIngredient8} - {meal.strMeasure8}</span>
                    <span className='flex ml-2'>{meal.strIngredient9} - {meal.strMeasure9}</span>
                    <span className='flex ml-2'>{meal.strIngredient6} - {meal.strMeasure6}</span>
                    <span className='flex ml-2'>{meal.strIngredient7} - {meal.strMeasure7}</span>
                    <span className='flex ml-2'>{meal.strIngredient8} - {meal.strMeasure8}</span>
                    <span className='flex ml-2'>{meal.strIngredient9} - {meal.strMeasure9}</span>
                    </div>
                  </div>
                  <p className='text-start tracking-wider	 leading-relaxed mb-3'>{meal.strInstructions}</p>
                  <div className="">
                      <a href={meal.strYoutube} target="_blank" className='flex flex-row items-center'>
                        <span className='text-gray-500'>Source From : </span>
                        <span className='text-orange-400'>{meal.strSource}</span>
                      </a>
                      <a href={meal.strYoutube} target="_blank" className='flex flex-row items-center'>
                        <AiFillYoutube className="cursor-pointer text-red-600 text-5xl" />
                        <span className='text-gray-500'>: watch on Youtube</span>
                      </a>
                    

                  </div>
                </div>
              </div>


              </div>
           </div>
          )}
          
    </>
  )


  
}


export default Detail