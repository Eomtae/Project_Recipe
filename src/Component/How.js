import React from 'react'
import '../App.scss'
import '../media.scss'
import { useEffect, useState } from 'react'
import {useParams ,useLocation } from 'react-router-dom'
import { BrowserRouter, Route, Routes,Link,NavLink} from 'react-router-dom';

// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';


// Styles must use direct files imports
// import 'swiper/swiper.min.css'; // core Swiper
// import 'swiper/modules/navigation/navigation.min.css'; // Navigation module
// import 'swiper/modules/pagination/pagination.min.css'; // Pagination module
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const How = () => {
  const [data, setData] = useState();
  const [arr,setArr] = useState()
  const [count,setCount] = useState([0])
  const [load,setLoad] = useState(false)

  const params = useParams();
  // console.log(params.id)
  useEffect(() => {

    fetch('http://openapi.foodsafetykorea.go.kr/api/88ec610d178b41408c5b/COOKRCP01/json/1/800')
      .then(response => response.json())
      .then(
        response => 
        {
            init(response)
            setLoad(true)
        }
        )
      .catch(err => console.error(err));
  }, [])

  let Row;
  let fry = [];
  let steam = [];
  let roast = [];
  let bog = [];
  let boil = [];
  let guitar = [];
  
  function init(data) {
    Row = data.COOKRCP01.row
    fry = Row && Row.filter((obj) => obj.RCP_WAY2 == '튀기기')
    steam = Row && Row.filter((obj) => obj.RCP_WAY2 == '찌기')
    roast = Row && Row.filter((obj) => obj.RCP_WAY2 == '굽기')
    bog = Row && Row.filter((obj) => obj.RCP_WAY2 == '볶기')
    boil = Row && Row.filter((obj) => obj.RCP_WAY2 == '끓이기')
    guitar = Row && Row.filter((obj) => obj.RCP_WAY2 == '기타')
    setData(Row)
    // console.log(data)
    // asdf()
    let dataarr = [boil,fry,steam,bog,roast,guitar]
   
    // console.log(params.id)
    // new(dataarr)
    
    // const result=[];
    
    let abc=  Row.filter(object => object.RCP_NM == params.id)
    // console.log(abc)
    // console.log(abc[0])
     // const result = dataarr[0].filter(object => object.RCP_NM == params.id);
     // console.log(dataarr)
     setArr(abc[0])
    }
     // console.log(arr);
     
     // console.log(last)
     // console.log(result)

// console.log(arr)
// let how ;
// if(arr!==undefined){
//   const how = arr[0][0];
//   console.log(how)


return (
  <>
     <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper "
    >
      <SwiperSlide>
        <div className='method'>
        <p>{arr?.MANUAL01}</p>
        <img src={arr?.MANUAL_IMG01} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='method'>
        <p>{arr?.MANUAL02}</p>
        <img src={arr?.MANUAL_IMG02} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='method'>
        <p>{arr?.MANUAL03}</p>
        <img src={arr?.MANUAL_IMG03} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='method'>
        <p>{arr?.MANUAL04}</p>
        <img src={arr?.MANUAL_IMG04} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='method'>
        <p>{arr?.MANUAL05}</p>
        <img src={arr?.MANUAL_IMG05} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='method'>
        <p>{arr?.MANUAL06}</p>
        <img src={arr?.MANUAL_IMG06} alt="" />
        </div>
      </SwiperSlide>
    </Swiper> 
  </>
);
}

export default How

