import React from 'react'
import '../Pages/MorningPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import croissant from '../images/croissant.png'
import Maskgroup from '../images/Mask group.png'

function MorningPage(props) {
  const location = useLocation();
  const { menuData, color, Name, modColor } = location.state || {};
  //  const { modColor } = props;

  console.log(location.state);
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/")
  }

  return (
    <div className='wholePage'>
      <div className='ApBar' style={{ background: color }
      }>
        <img className='MaskGroup' src={Maskgroup} alt="Maskgroup" onClick={navigateToHomePage} />
        <div className='Title' >{Name}</div>
      </div >

      <div className='MenuDisplay'>
        {menuData &&
          menuData.map((item, index) => (
            <div key={index} className='mod' style={{ borderColor: modColor }}>
              <img className='image' src={item.item_image} />
              <div className="item-info">
                <span>{item.item_name}</span>
                <span style={{ opacity: "0.5",color: "#557A46" }} >₹{item.item_price}</span>
              </div>
            </div>

          ))}

      </div>


    </div>

  )
}

export default MorningPage