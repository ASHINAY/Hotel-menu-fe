import React, { useState, useEffect } from 'react'
import '../Pages/HomePage.css';
import { useNavigate } from 'react-router-dom'

function HomePage() {
  return (
    <div className='wholePage'>
    <div className='MainContainer'>
        <div className='Title' >Hotel Anna Poorna</div>
        <div>
    <span>Tastes Like Heaven, Feels Like Home</span>
    </div>
    </div>

    <div className='Hotel'>Hotel Menu</div>
    <div className='MorningContainer'>
    <div className='Morning'>
    <span style={{marginTop:"55px",fontSize:"10px",color:"#000000"
,display:'flex',textAlign:'center'}}>Morning Mood</span>
    </div>

    <div className='Morning'>
    <span style={{marginTop:"55px",fontSize:"10px",color:"#000000"
,display:'flex',textAlign:'center'}}>Midday Munch</span>
    </div>
</div>
    <div className='Morning'>
    <span style={{marginTop:"55px",fontSize:"10px",color:"#000000"
,display:'flex',textAlign:'center'}}>Lunch Luxuries</span>
    </div>

    <div className='Morning'>
    <span style={{marginTop:"55px",fontSize:"10px",color:"#000000"
,display:'flex',textAlign:'center'}}>Sunset Sips</span>
    </div>

    <div className='Morning'>
    <span style={{marginTop:"55px",fontSize:"10px",color:"#000000"
,display:'flex',textAlign:'center'}}>Moonlight stips</span>
    </div>
    </div>
    
  )
}

export default HomePage