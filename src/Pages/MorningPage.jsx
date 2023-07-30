import React from 'react'
import '../Pages/MorningPage.css';
import { useNavigate } from 'react-router-dom';
import croissant from '../images/croissant.png'
function MorningPage() {

  return (
    <div className='wholePage'>
      <div className='ApBar'>
      <div style={{ transform: 'rotate(270deg)',paddingright:"51%"}}>{"<"}</div>
        <div className='Title' >Morning Moods</div>
      </div>
      <div className='MenuDisplay'>
        <div className='mod'>
          <img className='image' src={croissant} />
          <span style={{padding:"5px 10px 5px 10px"}}>Ghee Dosa</span>
        <span style={{display:"flex",alignItems:"flex-end"}}>50rs</span>
        </div>
      </div>
    </div>
  ) 
}

export default MorningPage