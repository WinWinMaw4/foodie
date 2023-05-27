import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <>
      <div className='container mx-auto text-center h-96 flex justify-center items-center'>
       <div className="flex flex-col justify-center items-center">
       <span className='text-2xl text-gray-300'>Please Wait For Special Delicious</span>
        <div className="">
        <div class="loadingio-spinner-dual-ball-6ra1qt1mviy"><div class="ldio-jxixioyfbg">
        <div></div><div></div><div></div>
        </div></div>
        </div>
       </div>
    </div>
     {/* <div className="h-full h-96 bg-green-500">
     <span className="text-5xl">Hello</span>
    </div>
    <div className="h-full h-96 bg-blue-500">
     <span className="text-5xl">Hello</span>
    </div>
    <div className="h-full h-96 bg-pink-500">
     <span className="text-5xl">Hello</span>
    </div> */}
    </>
  )
}
export default Loading