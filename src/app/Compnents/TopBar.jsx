import React from 'react'
import { FaRegUserCircle } from "react-icons/fa"

const TopBar = () => {
  return (
    <div className='w-full border-b-2 flex justify-between items-center px-2 py-4 h-auto'>

      <div className='flex items-center'>
        <img className='w-[3.5rem]' src="download__10_-removebg-preview (2).png"/>
        <h1 className='text-[1.5rem] font-bold'>WhatBytes</h1>
      </div>

      <div className='flex items-center border-2 p-2 rounded-lg flex-row gap-x-2'>
        <FaRegUserCircle />
        <h1 className='font-bold'>Agbata Trust</h1>
      </div>

    </div>
  )
}

export default TopBar
