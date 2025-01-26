"use client"
import Link from 'next/link'
import React from 'react'
import { IoStatsChart } from "react-icons/io5";
import { RiAwardFill } from "react-icons/ri";
import { IoDocument } from "react-icons/io5";
import { usePathname } from 'next/navigation';


const SideBar = () => {
    const pathName = usePathname()
  return (
    <div className='overflow-hidden sticky left-0 top-0'>
      
        <div className='border-r-2 h-[100vh] py-[4rem] px-[0.5rem] flex flex-col gap-y-[2rem]'>

            <Link href={"/"} className={`text-[2rem] p-2 flex flex-col md:flex-row gap-x-[0.3rem] items-center md:text-[rem] font-bold md:gap-x-[0.1rem] group ${pathName === "/" ? "text-purple-800 bg-slate-200 rounded-r-full" : ""}`}>
            <IoStatsChart />
            <p className={`md:flex hidden group-hover:flex transition-all duration-500 ease-in-out md:static absolute left-[0.9rem] top-[6.5rem] bg-black text-white p-1 md:rounded-none rounded-lg text-[0.7rem] md:text-black md:bg-inherit md:text-[1.1rem] ${pathName === "/" ? "md:text-purple-800" : ""}`}>Dashboard</p>
            </Link>

            <Link href={"/skill_test"} className={`text-[2rem] p-2 flex flex-col md:flex-row gap-x-[0.3rem] items-center md:text-[rem] font-bold md:gap-x-[0.1rem] group ${pathName === "/skill_test" ? "text-purple-800 bg-slate-200 rounded-r-full" : ""}`}>
            <RiAwardFill />
            <p className={`md:flex hidden group-hover:flex transition-all duration-500 ease-in-out md:static  absolute left-[0.9rem] top-[11.5rem] bg-black text-white p-1 md:rounded-none rounded-lg text-[0.7rem] md:text-black md:bg-inherit md:text-[1.1rem] ${pathName === "/skill_test" ? "md:text-purple-800" : ""}`}>Skill Test</p>
            </Link>

            <Link href={"/internship"} className={`text-[2rem] p-2 flex flex-col md:flex-row gap-x-[0.3rem] items-center md:text-[rem] font-bold md:gap-x-[0.1rem] group ${pathName === "/internship" ? "text-purple-800 bg-slate-200 rounded-r-full" : ""}`}>
            <IoDocument />
            <p className={`md:flex hidden group-hover:flex transition-all duration-500 ease-in-out md:static  absolute left-[0.9rem] top-[16.5rem] bg-black text-white p-1 md:rounded-none rounded-lg text-[0.7rem] md:text-black md:bg-inherit md:text-[1.1rem] ${pathName === "/internship" ? "md:text-purple-800" : ""}`}>Internship</p>
            </Link>
           

        </div>

    </div>
  )
}

export default SideBar
