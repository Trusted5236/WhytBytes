"use client"
import React, { useContext, useState } from "react";
import { HiTrophy } from "react-icons/hi2";
import { RiTodoFill } from "react-icons/ri";
import { FaCheckSquare } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Html from "./Html";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { FormContext } from "./FormContext";

const FirstComponent = () => {
    const {formData2, updateFormData} = useContext(FormContext)
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        rank: "0",
        percentile: "0",
        scores: "0"
    })

    const handleClick = ()=>{
        setIsVisible(true)

    }

    const handleCancel =()=>{
        setIsVisible(false)
    }

    const handleChange =(e)=>{
        const { name, value } = e.target;
   if (name === "percentile" || name === "scores") {
      if (!/^\d*$/.test(value)) return;  // Allow only numbers
   }

        setFormData((prevState)=>({
            ...prevState, [name]:value
        }))
        updateFormData({[name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsVisible(false)
    }

  return (
    <div className="w-full h-auto flex flex-col gap-y-4">
      <Html handleClick={handleClick}/>

      <div className="border-2 rounded-lg px-2 py-6">
        <p className="text-[0.7rem] font-bold pb-2">Quick Statistics</p>

        <div className="w-full h-auto flex flex-row items-center justify-between ">

          <div className="flex flex-row gap-x-1">
            <HiTrophy className="text-orange-500 text-[2rem] rounded-full bg-slate-200 p-2" />

            <div className="text-[0.7rem]">
              <p className="font-bold">{formData.rank}</p>
              <p className="text-slate-600">YOUR RANK</p>
            </div>
          </div>

          <div className="flex flex-row gap-x-1 ">
            <RiTodoFill className="text-orange-500 text-[2rem] rounded-full bg-slate-200 p-2" />

            <div className="text-[0.7rem] ">
              <p className="font-bold">{formData.percentile}%</p>
              <p className="text-slate-600">PERCENTILE</p>
            </div>
          </div>

          <div className="flex flex-row gap-x-1 ">
            <FaCheckSquare className="text-green-800 text-[2rem] rounded-full bg-slate-200 p-2" />

            <div className="text-[0.7rem]">
              <p className="font-bold">{`${formData.scores}/15`}</p>
              <p className="text-slate-600">CORRECT ANSWERS</p>
            </div>
          </div>
        </div>
      </div>

   
       


        <div className={`fixed bg-black/25 left-0 right-0 top-0 bottom-0 ${isVisible ? "flex" : "hidden"} items-center justify-center`}>
       
        <form onSubmit={handleSubmit} className="w-[75%] md:w-[35%] flex flex-col gap-y-4 rounded-lg bg-slate-100 px-2 py-6">

        <div className="flex flex-row items-center justify-between">
            <h1 className="text-[1.3rem] font-bold">Update scores</h1>
            <img src="/html.png" className="w-[2rem]"/>
        </div>

            <ol className="flex flex-row items-center justify-between ">

                <div className="flex flex-row gap-x-3 items-center">
                <p className="bg-purple-800 rounded-full text-white p-1 text-[0.7rem] w-6 h-6 text-center">1</p>
                <li className="text-[0.7rem]">Update your <strong>Rank</strong></li>
                </div>

                <input 
                type="text" 
                placeholder="Rank" 
                value={formData.rank}
                onChange={handleChange}
                name="rank"
                className="border-[0.1rem] outline-none focus:border-green-500 border-purple-800 rounded-lg p-2 text-[0.7rem]"/>
            </ol>

            <ol className="flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-x-3">
                    <p className="bg-purple-800 rounded-full text-white p-1 text-[0.7rem] w-6 h-6 text-center">2</p>
                <li className="text-[0.7rem]">Update your <strong>Percentile</strong></li>
                </div>
                <input 
                type="text" 
                placeholder="Percentile" 
                value={formData.percentile}
                onChange={handleChange}
                name="percentile"
                className="border-[0.1rem] outline-none focus:border-green-500 border-purple-800 rounded-lg p-2 text-[0.7rem]"/>
            </ol>

            <ol className="flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-x-3">
                    <p className="bg-purple-800 rounded-full text-white p-1 text-[0.7rem] w-6 h-6 text-center">3</p>
                <li className="text-[0.7rem]">Update your <strong>Current Score (out of 15)</strong></li>
                </div>
                <input 
                type="text" 
                placeholder="Score" 
                value={formData.scores}
                onChange={handleChange}
                name="scores"
                className="border-[0.1rem] outline-none focus:border-green-500 rounded-lg p-2 text-[0.7rem] border-purple-800"/>
            </ol>

            <div className="flex items-center justify-end flex-row gap-x-4">
                <button className="border-2 border-purple-800 px-4 py-2 rounded-lg text-[0.7rem] text-purple-800" onClick={handleCancel} type="button">cancel</button>
                <button className=" flex flex-row items-center bg-purple-800 text-white rounded-lg px-4 py-2 text-[0.7rem] gap-x-2" type="submit">save <FaArrowRightLong /></button>
            </div>
        </form>
        </div>

        <div className="border-2 rounded-lg px-2 py-[4rem]">
             <div style={{ width: "100%", height: 400 }}>
                <h2 className="text-lg font-bold mb-4">Score Chart</h2>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                     { percentile: parseFloat(formData.percentile) || 0, score: formData.scores }, 
                     { percentile: 100, score: 15 },
        ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis  dataKey="percentile" type="number" domain={[0, 100]} tickCount={5} label={{ value: "Percentile", position: "insideBottom", offset: -5 }}/>
                    <YAxis/>
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
                    <text x={70} y={30} fontSize={13} fill="#333" fontWeight="bold">{`You scored ${formData.percentile}%`}</text>
                  </LineChart>
                </ResponsiveContainer>
                </div>
        </div>
      </div>

  );
};

export default FirstComponent;
