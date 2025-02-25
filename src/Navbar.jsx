import React from 'react'
import { CiMenuFries , CiHome, CiSearch, CiSquarePlus, CiUser, CiLogout } from "react-icons/ci";
import { PiRankingThin , PiToggleLeftThin  } from "react-icons/pi";

const Navbar = () => {
    return (
        <div style={{padding:"0 1rem"}} className='navbar h-[100vh] w-full min-w-fit max-w-60 fixed top-0 border-r-[1px] flex flex-col justify-between'>
            <h2 style={{padding:"10px 0"}} className='border-b-2 flex items-center justify-between w-[100%]'><a href="/" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 text-2xl rounded-[10px]'><span>MemeVerse</span></a><CiMenuFries /></h2>
            <ul style={{padding: "1rem 0"}} className='h-full flex flex-col gap-1'>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiHome /><span>Home</span></a></li>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiSearch /><span>Explore</span></a></li>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiSquarePlus /><span>Upload</span></a></li>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><PiRankingThin /><span>Leaderboard</span></a></li>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiUser /><span>Profile</span></a></li>
            </ul>
            <div style={{padding:"5px 0"}} className='navBottom border-t-2'>
                <h4 style={{paddingLeft:"4px",margin:"4px 0"}} className='w-full flex justify-between items-center gap-2 h-12 rounded-[10px]  cursor-pointer hover:bg-[#3a373327]'>Dark Mode<PiToggleLeftThin style={{marginRight:"4px"}} /></h4>
                <h4 style={{paddingLeft:"4px",margin:"4px 0"}} className='flex gap-2 h-12 rounded-[10px]  cursor-pointer hover:bg-[#3a373327]'><a href="#" className='w-full flex justify-between items-center '><span>Logout</span><CiLogout style={{marginRight:"4px"}} /></a></h4>
            </div>
        </div>
    )
}

export default Navbar