import React from 'react'
import './Navbar.css'
import { CiMenuFries , CiHome, CiSearch, CiSquarePlus, CiUser, CiLogout } from "react-icons/ci";
import { PiRankingThin , PiToggleLeftThin  } from "react-icons/pi";

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2><a href="/"><span>MemeVerse</span></a><CiMenuFries /></h2>
            <ul>
                <li><a href="#"><CiHome /><span>Home</span></a></li>
                <li><a href="#"><CiSearch /><span>Explore</span></a></li>
                <li><a href="#"><CiSquarePlus /><span>Upload</span></a></li>
                <li><a href="#"><PiRankingThin /><span>Leaderboard</span></a></li>
                <li><a href="#"><CiUser /><span>Profile</span></a></li>
            </ul>
            <div className='navBottom'>
                <h4>Dark Mode<PiToggleLeftThin /></h4>
                <h4><a href="#"><span>Logout</span><CiLogout /></a></h4>
            </div>
        </div>
    )
}

export default Navbar