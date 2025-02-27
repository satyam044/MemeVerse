import React from 'react'
import { FaUser , FaRegHeart  ,  } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

const MemeCard = ({memeData}) => {
    return (
        <div style={{padding:"10px"}} className='card rounded-2xl w-[90%] flex flex-col gap-1 bg-[#3a373327] text-center'>
            <h2 className='text-2xl'>{memeData.name}</h2>
            <img src={memeData.url} alt="" className='w-full aspect-[3/3] border-2 rounded-2xl object-contain' />
            <div className='flex items-center relative left-4 gap-4'>
                <div className='flex items-center gap-1'><FaRegHeart />100</div>
                <div className='flex items-center gap-1'><FaRegComment/>200</div>
                <div className='flex items-center gap-1'><HiOutlinePaperAirplane/>300</div>
            </div>
        </div>
    )
}

export default MemeCard