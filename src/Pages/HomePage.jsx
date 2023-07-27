import React from 'react'
import '../Pages/HomePage.css';
// import { useNavigate } from 'react-router-dom'

function HomePage() {
  return (
    <div className='wholePage'>
      <div className='MainContainer'>
        <div className='Title' >Hotel Anna Poorna</div>
        <div style={{ fontSize: "15px",opacity:'0.1-1%' }}>Tastes Like Heaven, Feels Like Home</div>
      </div>
      <div className='Hotel'>Hotel Menu</div>
      <div className='MorningContainer'>
        <div className='MorningRow'>
          <div className='Morning'>
            <span>Morning Mood</span>
          </div>

          <div className='Morning'>
            <span>Midday Munch</span>
          </div>
        </div>
        <div className='MorningRow'>
          <div className='Morning'>
            <span>Lunch Luxuries</span>
          </div>

          <div className='Morning'>
            <span>Sunset Sips</span>
          </div>
        </div>
        <div className='lastBlock'>
          <div className='Morning'>

            <span>Moonlight stips</span>
          </div>
        </div>
      </div>
    </div>


  )
}

export default HomePage