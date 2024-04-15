import React from 'react';
import './index.css';
import Navbar from './Component/Navbar/Navbar';
import Background from './Component/Background/Background';
import Home from './Component/Home/Home';
import Title from './Component/Title/Title';
import Explore from './Component/Explore/Explore';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  let heroData = [
    {
      text1: "Dive into", text2: "what you love"
    },
    {
      text1: "Indulge", text2: "your passions"
    },
    {
      text1: "Give in to", text2: "your passions"
    },
  ]

  const [playStatus, setPlayStatus] = useState(false);
  const [heroCount, setHerocount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHerocount((count) => {
        return count === 2 ? 0 : count + 1;
      })
    }, 3000);
  }, [])

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <div className='container'>
        <Home
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHerocount}
          playStatus={playStatus}
        />
        <Title subtitle={"Our design"} title={"Explore"} />
        <Explore />
        <Title subtitle={"Let's know"} title={"About us"} />
        <About />
        <Title subtitle={"See our"} title={"Services"} />
        <Services />
        <Title subtitle={"Let's collaborate"} title={"Contact"} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

