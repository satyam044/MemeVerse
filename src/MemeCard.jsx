import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

const MemeCard = ({memeData}) => {
    const randomCom = useState(Math.floor(Math.random()*1000));
    const randomShare = useState(Math.floor(Math.random()*100));
    const [randomLike,setRandomLike] = useState(Math.floor(Math.random()*10000));
    const [likeStatus, setLikeStatus] = useState(false);

    const handleLikeStatus = ()=> {
        setLikeStatus(!likeStatus);
        if (!likeStatus) {
            setRandomLike(prev=>prev+1);
        }else{
            setRandomLike(prev=>prev-1);
        };
    };

    return (
        <div style={{padding:"10px"}} className='card rounded-2xl w-[80%] flex flex-col gap-1 bg-[#3a373327]'>
            <h2 className='text-2xl font-semibold'>{memeData.name}</h2>
            <img src={memeData.url} alt="" className='w-full aspect-[4/3] border-2 rounded-2xl object-contain' onDoubleClick={handleLikeStatus} />
            <div className='w-full flex items-center text-[1.4vw] font-light relative left-2 gap-6'>
                <div className='flex items-center gap-1'>{likeStatus ? <FaHeart onClick={handleLikeStatus} className='cursor-pointer text-red-500' /> : <FaRegHeart onClick={handleLikeStatus} className='cursor-pointer' />}{randomLike}</div>
                <div className='flex items-center gap-1'><FaRegComment className='cursor-pointer'/>{randomCom}</div>
                <div className='flex items-center gap-1'><HiOutlinePaperAirplane className='cursor-pointer'/>{randomShare}</div>
            </div>
        </div>
    )
}

export default MemeCard