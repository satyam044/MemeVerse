import React, { useState } from 'react'
import { CiMenuFries , CiHome, CiSearch, CiSquarePlus, CiUser, CiLogout } from "react-icons/ci";
import { PiRankingThin , PiToggleLeftThin  } from "react-icons/pi";

const Navbar = () => {
    const [hamToggle,setHamToggle] = useState(false);
    const handleHamToggle = ()=> {
        setHamToggle(!hamToggle);
    };

    return (
        <div style={{padding:"0 1rem"}} className={`navbar h-[100vh] fixed top-0 border-r-[1px] flex flex-col justify-between transition-all duration-75 ease-in ${hamToggle ? "w-[4rem] items-center" : "w-60"}`}>
            <h2 style={{padding:"10px 0"}} className={`border-b-2 flex items-center w-[100%] ${hamToggle ? "justify-center" : "justify-between"}`}><a href="/" className='flex items-center gap-2 h-12 text-2xl rounded-[10px]'><span className={`${hamToggle && "hidden"}`}>MemeVerse</span></a><CiMenuFries onClick={handleHamToggle} /></h2>
            <ul style={{padding: "1rem 0"}} className='h-full flex flex-col gap-1'>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiHome /><span className={`${hamToggle && "hidden"}`}>Home</span></a></li>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiSearch /><span className={`${hamToggle && "hidden"}`}>Explore</span></a></li>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiSquarePlus /><span className={`${hamToggle && "hidden"}`}>Upload</span></a></li>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><PiRankingThin /><span className={`${hamToggle && "hidden"}`}>Leaderboard</span></a></li>
                <li><a href="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiUser /><span className={`${hamToggle && "hidden"}`}>Profile</span></a></li>
            </ul>
            <div style={{padding:"5px 0"}} className='navBottom border-t-2'>
                <h4 style={{paddingLeft:"4px",margin:"4px 0"}} className='w-full flex justify-between items-center gap-2 h-12 rounded-[10px]  cursor-pointer hover:bg-[#3a373327]'><span className={`${hamToggle && "hidden"} text-nowrap`}>Dark Mode</span><PiToggleLeftThin style={{marginRight:"4px"}} /></h4>
                <h4 style={{paddingLeft:"4px",margin:"4px 0"}} className='flex gap-2 h-12 rounded-[10px]  cursor-pointer hover:bg-[#3a373327]'><a href="#" className='w-full flex justify-between items-center '><span className={`${hamToggle && "hidden"}`}>Logout</span><CiLogout style={{marginRight:"4px"}} /></a></h4>
            </div>
        </div>
    )
}

export default Navbar