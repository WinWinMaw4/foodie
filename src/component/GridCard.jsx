import React from 'react'
import { Link } from 'react-router-dom'

const GridCard = ({meal}) => {
  return (
    <div className='grid-card rounded-t-lg overflow-hidden shadow transition-all duration-300 hover:scale-105 '>
        <img src={meal.strMealThumb} alt="" />
        <div className="flex justify-between items-center py-2 px-2 bg-sky-500/[.06]  ">
        <h3 className='text-xs md:text-base lg:text-x truncate'>{meal.strMeal}</h3>
        <Link to={`/detail/${meal.idMeal}`}>
          <button className='bg-orange-400 px-4 py-2 rounded-full  transition-all ease-in-out hover:bg-orange-300 duration-300	 '>Detail</button>
        </Link>
        </div>
    </div>
  )
}

export default GridCard