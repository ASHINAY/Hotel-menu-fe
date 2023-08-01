import morningIcon from '../images/morningIcon.png'
import MiddayIcon from '../images/MiddayIcon.png'
import LunchIcon from '../images/LunchIcon.png'
import sunsetIcon from '../images/sunsetIcon.png'
import moonlightIcon from '../images/moonlightIcon.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Pages/HomePage.css';


const HomePage = () => {
  const borderColors = ['#FF7043', '#228B22', '#FF1493', '#00008B'];
  const morningMoodsData = [
    {
      "item_name": "Idli",
      "item_price": 70,
      "item_image": "https://i.postimg.cc/25y4bLBp/istockphoto-1145169012-1024x1024.jpg"
    },
    {
      "item_name": "Masala Dosa",
      "item_price": 100,
      "item_image": "https://i.postimg.cc/qRp4xrZ7/deepal-tamang-5o-F7d-h-PJG4-unsplash.jpg"
    }
  ];
  const navigate = useNavigate();
  const onMorningMoodsClick = () => {
    navigate("/MorningPage", { state: { morningMoodsData, color:'#C58940', Name:'Morning Moods' } })
  }

  return (
    <div className='wholePage'>
      <div className='AppBar'>
        <div className='HotelName' >Hotel Anna Poorna</div>
        <div className='ApText'>Tastes Like Heaven, Feels Like Home</div>
      </div>

      <div className='Hotel'>Hotel Menu</div>
      <hr className='Line' />
      <div className='MorningContainer'>

        <div className='MorningRow'>
          <div className='Morning'>
            <div className='Moods' onClick={onMorningMoodsClick}>
              <img className='ImageTg' src={morningIcon} alt="morningIcon" />
              <span className='Text'>Morning Moods</span>
            </div>
          </div>

          <div className='Morning' style={{ borderColor: borderColors[0] }}>
            <div className='Moods'>
              <img className='ImageTag' src={MiddayIcon} />
              <span className='Text'>Midday Munch</span>
            </div>
          </div>
        </div>
        <div className='MorningRow'>
          <div className='Morning' style={{ borderColor: borderColors[1] }}>
            <div className='Moods'>
              <img className='ImageTag' src={LunchIcon} />
              <span className='Text'>Lunch Luxuries</span>
            </div>
          </div>

          <div className='Morning' style={{ borderColor: borderColors[2] }}>
            <div className='Moods'>
              <img className='ImageTag' src={sunsetIcon} />
              <span className='Text'>Sunset Sips</span>
            </div>
          </div>

        </div>
        <div div className='lastBlock'>
          <div className='Morning' style={{ borderColor: borderColors[3] }}>
            <div className='Mood'>
              <img className='ImageTag' src={moonlightIcon} />
              <span className='Text'>Moonlight stips</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default HomePage