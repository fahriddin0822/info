import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Header = () => {
   
  return (
    <div className='bg-blue-200 flex justify-around px-10 py-4'>
        <NavLink to={"/create"} className="border border-spacing-1 rounded-md px-4 py-1 text-white bg-blue-500 ">Create</NavLink>
        <NavLink to={"/info"} className="border border-spacing-1 rounded-md px-4 py-1 bg-emerald-400 text-slate-950 items-center justify-center ">ShowAll</NavLink>
    </div>
  )
}

export default Header