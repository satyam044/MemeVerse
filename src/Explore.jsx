import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './Navbar';
import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';

const Explore = () => {
    const [memeInfo, setMemeInfo] = useState([]);
    const [filteredMemes, setFilteredMemes] = useState([]);
    const [visibleMemes, setVisibleMemes] = useState([]);
    const [count, setCount] = useState(20);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('Trending');
    const [sortBy, setSortBy] = useState('Random');

    useEffect(() => {
        const getMemes = async () => {
            const res = await fetch(`https://api.imgflip.com/get_memes`);
            const data = await res.json();
            const memesWithMeta = data.data.memes.map(meme => ({
                ...meme,
                likes: Math.floor(Math.random() * 10000),
                comments: Math.floor(Math.random() * 1000),
                date: Date.now() - Math.floor(Math.random() * 1000000000),
            }));
            setMemeInfo(memesWithMeta);
        };
    
        getMemes();
    }, []);

    useEffect(() => {
        handleCategoryChange(category);
    }, [memeInfo, category]);

    useEffect(() => {
        setVisibleMemes(filteredMemes.slice(0, count));
    }, [filteredMemes]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
                loadMoreMemes();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [count, filteredMemes]);

    useEffect(() => {
        handleCategoryChange(category);
    }, [category]);

    const loadMoreMemes = () => {
        if (count >= filteredMemes.length) return;
        setCount(prevCount => prevCount + 20);
        setVisibleMemes(filteredMemes.slice(0, count + 20));
    };

    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearch = useCallback(debounce((query) => {
        const filtered = memeInfo.filter(meme =>
            meme.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMemes(filtered);
        setCount(20);
        setVisibleMemes(filtered.slice(0, 20));
    }, 300), [memeInfo]);

    useEffect(() => {
        handleSearch(searchQuery);
    }, [searchQuery]);

    const handleCategoryChange = (selectedCategory) => {
        let filtered = memeInfo;

        if (selectedCategory === 'Trending') {
            filtered = [...memeInfo].sort((a, b) => b.likes - a.likes);
        } else if (selectedCategory === 'New') {
            filtered = [...memeInfo].sort((a, b) => b.date - a.date);
        } else if (selectedCategory === 'Classic') {
            filtered = memeInfo.slice(0, 50);
        } else if (selectedCategory === 'Random') {
            filtered = [...memeInfo].sort(() => Math.random() - 0.5);
        }

        setFilteredMemes(filtered);
        setCount(20);
        setVisibleMemes(filtered.slice(0, 20));
    };

    const handleSortChange = (event) => {
        let sortedMemes = [...filteredMemes];

        if (event.target.value === 'Likes') {
            sortedMemes.sort((a, b) => b.likes - a.likes);
        } else if (event.target.value === 'Date') {
            sortedMemes.sort((a, b) => b.date - a.date);
        } else if (event.target.value === 'Comments') {
            sortedMemes.sort((a, b) => b.comments - a.comments);
        }

        setFilteredMemes(sortedMemes);
        setVisibleMemes(sortedMemes.slice(0, 20));
    };

    return (
        <div className='flex'>
            <Navbar />
            <div className='w-full flex justify-center'>
                <div className='wrapper flex items-center flex-col gap-8 bg-[#3a373327] w-[80%] p-4'>
                    <input 
                        type='search' 
                        placeholder='Search Memes...' 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{padding:"2px 10px"}}
                        className='w-[90%] sticky top-4 bg-[#9badb7] text-2xl capitalize outline-none border-2 rounded-2xl'
                    />
                    <div className='filterSorter w-[90%] overflow-auto flex justify-between gap-4 items-center'>
                        <div className="filter flex gap-2">
                            {['Trending', 'New', 'Classic', 'Random'].map(cat => (
                                <button 
                                    key={cat} 
                                    style={{padding:"2px 10px"}}
                                    className={`outline-none cursor-pointer border-2 rounded-2xl p-2 ${category === cat ? 'bg-gray-400' : ''}`} 
                                    onClick={() => setCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="sort">
                            <select 
                                value={sortBy} 
                                onChange={handleSortChange} 
                                style={{padding:"2px 10px"}}
                                className='outline-none border-2 rounded-2xl p-2'
                            >
                                <option value="Random">Random</option>
                                <option value="Likes">Likes</option>
                                <option value="Date">Date</option>
                                <option value="Comments">Comments</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-[85%] grid grid-cols-3 gap-4'>
                        {visibleMemes.map((meme) => (
                            <div key={meme.id} className='card w-full flex flex-col border-[1px] gap-1 bg-[#3a373327] p-2'>
                                <img 
                                    src={meme.url} 
                                    alt={meme.name} 
                                    className='w-full aspect-[4/3] object-contain' 
                                />
                                <div className='w-full flex items-center text-[1.4vw] font-light gap-4 p-2'>
                                    <LikeComponent initialLikes={meme.likes} />
                                    <div className='flex items-center gap-1'><FaRegComment className='cursor-pointer' />{meme.comments}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const LikeComponent = ({ initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    return (
        <div className='flex items-center gap-1'>
            {liked ? <FaHeart onClick={toggleLike} className='cursor-pointer text-red-500' /> : <FaRegHeart onClick={toggleLike} className='cursor-pointer' />}
            {likes}
        </div>
    );
};

export default Explore;
