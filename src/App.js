import './App.scss';
import './media.scss'
import { BrowserRouter, Routes, Route, Link,useNavigate } from 'react-router-dom'
import Main from './Component/Main'
import Recipe from './Component/Recipe'
import Detail from './Component/Detail'
import How from './Component/How'



import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";




function App() {
  // const navigate = useNavigate();
  return (

    <BrowserRouter>
    <div className='mainbox'>
    <img className='Whole' src='/img/background.jpg'></img>
      <main>
        <div className='mainbox-tab'>
        <Link to="/"><button><p>Foody</p></button></Link>
      
        </div>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/Recipe" element={<Recipe/>}></Route>
          <Route path="/Detail/:id" element={<Detail/>}></Route>
          <Route path="/How/:id" element={<How/>}></Route>
        </Routes>
      </main>
      </div>
    </BrowserRouter>

  );
}

export default App;