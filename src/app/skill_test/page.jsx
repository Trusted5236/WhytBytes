import React from 'react'
import Test from '../Compnents/Test'
import Analysis from '../Compnents/Analysis'

const Skill = () => {
  return (

    <div className='py-[2rem]'>
      <p>Skill Test</p>

     <div className='w-full flex flex-col md:flex-row md:items-start md:gap-x-6 gap-y-4'>
      <Test/>
      <Analysis/>
     </div>

    </div>
  )
}

export default Skill
