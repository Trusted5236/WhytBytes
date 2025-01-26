import React from 'react'

const Html = ({handleClick}) => {
  return (
    <div>
      <div className="w-full h-auto flex flex-row border-2 items-center justify-between px-2 py-6 rounded-lg">
              <div>
                <img src="/html.png" className="w-[2rem]" />
              </div>
      
              <div className="flex flex-col text-[0.7rem]">
                <h1 className="font-bold">Hyper Text Markup Language</h1>
                <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
              </div>
      
              <div>
                <button onClick={handleClick} className="bg-purple-800 text-[0.7rem] py-2 px-6 rounded-lg text-white">
                  Update
                </button>
              </div>
            </div>
    </div>
  )
}

export default Html
