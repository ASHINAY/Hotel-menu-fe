import React from 'react'
import '../Pages/MorningPage.css';
import { useLocation } from 'react-router-dom';
import croissant from '../images/croissant.png'
import Maskgroup from '../images/Mask group.png'
function MorningPage() {
  const location = useLocation();
  const { morningMoodsData } = location.state || {};

  return (
    <div className='wholePage'>
      <div className='ApBar'>
        <img className='MaskGroup' src={Maskgroup} />
        <div className='Title' >Morning Moods</div>
      </div>
      <div className='MenuDisplay'>
        {morningMoodsData &&
          morningMoodsData.map((item, index) => (
            <div key={index} className='mod'>
              <img className='image' src={item.item_image} />
              <div class="item-info">
                <span>{item.item_name}</span>
                <span style={{ opacity: "0.5" }} >₹{item.item_price}</span>
              </div>
            </div>
          ))}

      </div>
    </div>
  )
}

export default MorningPage