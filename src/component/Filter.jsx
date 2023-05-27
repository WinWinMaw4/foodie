import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Filter = () => {

    const [category,setCategory] = useState([]);
    const [area,setArea] = useState([]);
    const formRef = useRef();

    const getCategory = async ()=> {
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategory(data.categories);
    }
    const getArea = async ()=> {
      const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      setArea(data?.meals);
      console.log(data?.meals);
  }
    useEffect(()=>{
        getCategory()
        getArea()
    },[])

    const handleChange = (e) =>{
      e.preventDefault();
      nav('/filter/pasta',{state:{category:formRef.current[0].value}})

    }
  return (
    <div>
       <div className="grid grid-cols-2 gap-5 px-3">
            <div className="flex">
            <div className="w-1/2 mr-3">
               <form action="" ref={formRef}>
                <select id="categories" name='category' onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose Categories</option>
                    {category.map((cat)=>(<option value={cat.strCategory} key={cat.idCategory}>{cat.strCategory}</option>))}
                  </select>
               </form>
            </div>
            <div className="w-1/2">
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose Countries</option>
                  {area.map((area)=>(<option value={area.strArea} key={area.strArea}>{area.strArea}</option>))}
                </select>
            </div>
            </div>
            <div className="">  
              <form>   
                  <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search category,area,ingredient..." required></input>
                  </div>
              </form>

            </div>
       </div>
    </div>
  )
}

export default Filter