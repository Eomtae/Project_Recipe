import React from 'react'
import '../App.scss';
import '../media.scss'
import { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'



const Main = () => {
  const [count,setCount] = useState();
  const [data, setData] = useState([]);
  const [arr,setArr] = useState([])
  


  useEffect(() => {
    fetch('http://openapi.foodsafetykorea.go.kr/api/88ec610d178b41408c5b/COOKRCP01/json/1/30')
      .then(response => response.json())
      .then(
        response => 
        {
            init(response)
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
    let dataarr = [boil,fry,steam,bog,roast,guitar]
    setArr(dataarr)
  }
  useEffect(()=>{
    const elLoop = document.querySelector(".loop");
    let i;
    
    if(data.length>0){
      for (i = 0; i < data.length; i++) {
        elLoop.innerHTML += `<img src="${data[i].ATT_FILE_NO_MK}" alt="">`;
      }
    }
    
  },[data])


  
  return (
    
    <figure>
        <div className='big-box'>
          <div className='main-imgbox'>
          <img src="./img/mainimg.png" alt=""/>
          <div className='detail'>
          <span>
              건강하고 맛있는<br />요리의 세계로<br />떠나볼까요?</span>
              <Link to="/Recipe"><button className='recipe-go'>레시피 보러 가기</button></Link>
            </div>
          </div>
          <div className='loop'></div>
        </div>
    </figure>
  )
}

export default Main