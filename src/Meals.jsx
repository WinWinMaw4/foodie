import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GridCard from './component/GridCard';
import { useNavigate } from 'react-router-dom';
import Loading from './component/Loading';
import Filter from './component/Filter';

const Meals = () => {
    const [meals,setMeals] = useState([]);
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(true);

    const getMeals = async ()=> {
        // https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        setMeals(data.meals);
        setIsLoading(false);
    }
    useEffect(()=>{
        getMeals()
    },[])
  return (
   <>
        {isLoading ? <Loading/>: 
            (<div className='container mx-auto'>
                <div className="py-3 mt-10">
                    <Filter/>
                </div>
                <div className="container mx-auto">
                    <h1 className='text-2xl md:text-2xl lg:text-3xl font-bold py-5 md:py-8 lg:py-10 '>Chicken Breast</h1>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2 md:px-0">
                        {meals?.map((meal) => (
                                <GridCard key={meal.idMeal}  meal={meal}/>
                        ))}
                    </div>
                </div>
             </div>)
        }
   </>
  )
}

export default Meals