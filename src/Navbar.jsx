import React, { useState } from 'react'
import { CiMenuFries , CiHome, CiSearch, CiSquarePlus, CiUser, CiLogout } from "react-icons/ci";
import { PiRankingThin , PiToggleLeftThin  } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hamToggle,setHamToggle] = useState(false);
    const handleHamToggle = ()=> {
        setHamToggle(!hamToggle);
    };

    return (
        <div style={{padding:"0 1rem"}} className={`navbar h-[100vh] sticky top-0 border-r-[1px] flex flex-col justify-between transition-all duration-75 ease-in ${hamToggle ? "w-[4rem] items-center bg-[#3a373327]" : "w-[30%]"}`}>
            <h2 style={{padding:"10px 0"}} className={`border-b-2 flex items-center w-[100%] ${hamToggle ? "justify-center" : "justify-between"}`}><a href="/" className='flex items-center gap-2 h-12 text-2xl rounded-[10px]'><span className={`${hamToggle && "hidden"}`}>MemeVerse</span></a><CiMenuFries onClick={handleHamToggle} /></h2>
            <ul style={{padding: "1rem 0"}} className='h-full flex flex-col gap-1'>
                <li><Link to="/" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiHome /><span className={`${hamToggle && "hidden"}`}>Home</span></Link></li>
                <li><Link to="/explore" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiSearch /><span className={`${hamToggle && "hidden"}`}>Explore</span></Link></li>
                <li><Link to="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiSquarePlus /><span className={`${hamToggle && "hidden"}`}>Upload</span></Link></li>
                <li><Link to="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><PiRankingThin /><span className={`${hamToggle && "hidden"}`}>Leaderboard</span></Link></li>
                <li><Link to="#" style={{paddingLeft:"4px"}} className='flex items-center gap-2 h-12 rounded-[10px] hover:bg-[#3a373327]'><CiUser /><span className={`${hamToggle && "hidden"}`}>Profile</span></Link></li>
            </ul>
            <div style={{padding:"5px 0"}} className='navBottom border-t-2'>
                <h4 style={{paddingLeft:"4px",margin:"4px 0"}} className='w-full flex justify-between items-center gap-2 h-12 rounded-[10px]  cursor-pointer hover:bg-[#3a373327]'><span className={`${hamToggle && "hidden"} text-nowrap`}>Dark Mode</span><div className="relative inline-block w-10 h-5" style={{marginRight:"4px"}}><input id="switch-component" type="checkbox" className="peer appearance-none w-full h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" /><label htmlFor="switch-component" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"></label></div></h4>
                <h4 style={{paddingLeft:"4px",margin:"4px 0"}} className='flex gap-2 h-12 rounded-[10px] cursor-pointer hover:bg-[#3a373327]'><a href="#" className={`w-full flex items-center ${hamToggle ? "justify-center" : "justify-between"}`}><span className={`${hamToggle && "hidden"}`}>Logout</span><CiLogout style={{marginRight:"4px"}} /></a></h4>
            </div>
        </div>
    )
}

export default Navbar