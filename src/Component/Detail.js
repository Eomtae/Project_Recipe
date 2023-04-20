import React from 'react'
import '../App.scss'
import '../media.scss'
import { useEffect } from 'react'
import {useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const location = useLocation(); 
    // console.log(location.state.obj);
    // console.log(data)
    
    // console.log(params)
    const navigate = useNavigate();
    
    let detail = location.state.obj

    
    
    // const result = data.filter(object => object.RCP_NM == params.id);
  useEffect(() => {
    fetch('https://openapi.foodsafetykorea.go.kr/api/88ec610d178b41408c5b/COOKRCP01/json/1/800')
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
    
}

const goHow = (detail)=>{
  // console.log(detail)
  navigate(`/How/${detail.RCP_NM}`,
  )
  // navigate(<Detail obj={obj}/>)
  // console.log(obj)
}

  return (
    <div className='detail-content'>
    <div className='detail-left'>
      <img src={detail?.ATT_FILE_NO_MAIN} alt=""/>
        <div className='info'>
          <p>
              열량:{detail?.INFO_ENG}kcal <br></br>
              단백질:{detail?.INFO_PRO}g <br></br>
              지방:{detail?.INFO_FAT}g <br></br>
              탄수화물:{detail?.INFO_CAR}g <br></br>
              나트륨:{detail?.INFO_NA}mg <br></br>
          </p>


        </div>
    </div>
      <div className='detail-right'>
        <h1 >{detail?.RCP_NM}</h1>
        <span>{detail?.RCP_PARTS_DTLS}</span>
        <button onClick={()=>{goHow(detail)}} className='how-go'>같이 만들어 볼까?</button>
      </div>

  </div>
  )
} 

export default Detail