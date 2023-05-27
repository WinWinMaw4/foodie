import React from 'react'
import {GrRestaurant} from 'react-icons/gr'

const Nav = () => {
  return (
    <div className="flex flex-row justify-center items-baseline p-2 md:p-5 lg:p-10 text-4xl bg-orange-400 border-b-4 md:border-b-6 lg:border-b-8 border-b-black rounded-b-full  border-spacing-8 w-full top-0 z-10">
          <GrRestaurant className='text-2xl md:text-3xl lg:text-5xl text-green-700' />
          {/* <p></p> */}
    </div>
  )
}

export default Nav
