import React from 'react'
import '../Pages/HomePage.css';
// import { useNavigate } from 'react-router-dom'

function HomePage() {
  return (
    <div className='wholePage'>
      <div className='MainContainer'>
        <div className='Title' >Hotel Anna Poorna</div>
        <div className='AppText'>Tastes Like Heaven, Feels Like Home</div>
      </div>

      <div className='Hotel'>Hotel Menu</div>
      <hr style={{ height: "1px",backgroundColor:"#4682A9",
      marginLeft:"22px",marginRight:"22px" }}
      />
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