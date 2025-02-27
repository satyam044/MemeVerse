import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MemeComponent from './memeComponent';

const Home = () => {
  const [card, setCard] = useState([]);

  const getCardData = async () => {
    const res = await fetch(`https://api.imgflip.com/get_memes`);
    const data = await res.json();
    setCard(data.data.memes);
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <div className='home flex'>
      <Navbar />
      <MemeComponent memeInfo={card} />
    </div>
  )
}

export default Home