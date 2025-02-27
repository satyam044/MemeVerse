import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard'

const MemeComponent = ({ memeInfo }) => {
    const [visibleMemes, setVisibleMemes] = useState([]);
    const [count, setCount] = useState(10);

    useEffect(() => {
        setVisibleMemes(memeInfo.slice(0, count));
    }, [memeInfo]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
                loadMoreMemes();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [count, memeInfo]);

    const loadMoreMemes = () => {
        if (count >= memeInfo.length) return;
        setCount(prevCount => prevCount + 5);
        setVisibleMemes(memeInfo.slice(0, count + 5));
    };

    return (
        <div className='w-full flex justify-center'>
            <div style={{ padding: "1rem" }} className='wrapper w-[70%] flex items-center flex-col gap-8 bg-[#3a373327]'>
                {visibleMemes.map((info, id) => (
                    <MemeCard key={id} memeData={info} />
                ))}
            </div>
        </div>
    )
}

export default MemeComponent