import React from 'react'
import SecondComponent from './SecondComponent'
import PieChart from './PieChart'
const Analysis = () => {
  return (
    <div className='md:w-[30%] w-full flex flex-col gap-y-4'>
      <SecondComponent/>
      <PieChart/>
    </div>
  )
}

export default Analysis
