import React from 'react'
import '../App.scss'
import '../media.scss'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes,Link,NavLink, useNavigate, useLocation } from 'react-router-dom';


const Recipe = () => {
  // const location = useLocation(); 
  //   console.log(location)
  const [data, setData] = useState();
  const [arr,setArr] = useState([])
  const [count,setCount] = useState([0])
  const [load,setLoad] = useState(false)
  const navigate = useNavigate();

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
    setArr(dataarr)
// console.log(arr);
    

}

const goDetail = (obj)=>{
  navigate(`/Detail/${obj.RCP_NM}`,
  {state: {
    obj:obj
  },})
  // navigate(<Detail obj={obj}/>)
  // console.log(obj)
}
  return (
    <section>
        <div className='tab'>
                <button onClick={()=>setCount(0)}>탕</button>
                <button onClick={()=>setCount(1)}>튀김</button>
                <button onClick={()=>setCount(2)}>찜</button>
                <button onClick={()=>setCount(3)}>볶음</button>
                <button onClick={()=>setCount(4)}>구이</button>
                <button onClick={()=>setCount(5)}>곁들임</button>
        </div>
        <div className='flexbox'>
      {
        load ? arr && arr[count].map((obj,key)=>{
            return(
             
            <div onClick={()=>{goDetail(obj)}} className='recipe-content' key={key}>
                <img src={obj.ATT_FILE_NO_MAIN} alt=""/>
                <h1 >{obj.RCP_NM}</h1>
            </div>
            
            )
        }) : null
      }
      </div>
    </section>
  )
}

export default Recipe