import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();

    function back(){
        navigate(-1)
    }
  return (
    <div className='mainbox-tab'>
        <Link to="/"><button className='home'><p>Foody</p></button></Link>
        <button className='back' onClick={back}><img src='/img/prev-button.png' alt="a"></img></button>
        </div>
  )
}

export default Nav