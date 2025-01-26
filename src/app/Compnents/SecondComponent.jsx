import React from 'react'

const SecondComponent = () => {
  return (
    <div className='border-2 px-2 py-9 rounded-lg w-full'>

      <div>
        <h1 className='pb-4 text-[0.8rem] font-bold'>Syllabus Wise Analysis</h1>
      </div>

        <div className='flex flex-col gap-y-6'>
        <div>
        <p className='text-[0.89rem]'>HTML Tools, Forms, History</p>

        <div className='flex w-full items-center justify-between gap-x-6'>

       <div className='w-full'>
            <div className=' bg-blue-200 w-full rounded-lg'>
            <div className='bg-blue-700 w-[80%] p-[0.2rem] rounded-lg'></div></div>
       </div>

        <p className='text-[0.7rem] font-bold text-blue-700'>80%</p>
        </div>

        

    </div>

    <div>
        <p className='text-[0.89rem]'>Tags & Refrences in HTML</p>

        <div className='flex w-full items-center justify-between gap-x-6'>

       <div className='w-full'>
            <div className=' bg-orange-200 w-full rounded-lg'>
            <div className='bg-orange-700 w-[60%] p-[0.2rem] rounded-lg'></div></div>
       </div>

        <p className='text-[0.7rem] font-bold text-orange-700'>60%</p>
        </div>

        

    </div>

    <div>
        <p className='text-[0.89rem]'>Tables & Refrences in HTML</p>

        <div className='flex w-full items-center justify-between gap-x-6'>

       <div className='w-full'>
            <div className=' bg-red-200 w-full rounded-lg'>
            <div className='bg-red-700 w-[24%] p-[0.2rem] rounded-lg'></div></div>
       </div>

        <p className='text-[0.7rem] font-bold text-red-700'>80%</p>
        </div>

        

    </div>

    <div>
        <p className='text-[0.89rem]'>Tables & CSS Bascis</p>

        <div className='flex w-full items-center justify-between gap-x-6'>

       <div className='w-full'>
            <div className=' bg-green-200 w-full rounded-lg'>
            <div className='bg-green-700 w-[96%] p-[0.2rem] rounded-lg'></div></div>
       </div>

        <p className='text-[0.7rem] font-bold text-green-700'>96%</p>
        </div>

        

    </div>

        </div>

    
    </div>
  )
}

export default SecondComponent
