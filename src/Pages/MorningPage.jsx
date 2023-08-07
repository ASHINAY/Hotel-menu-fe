import React,{useEffect,useState} from 'react'
import '../Pages/MorningPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import croissant from '../images/croissant.png'
import Maskgroup from '../images/Mask group.png'

function MorningPage(props) {
  const location = useLocation();
  const { menuData, color, Name, modColor } = location.state || {};
  //  const { modColor } = props;
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/")
  }

useEffect ( () => {
   if (menuData === undefined) {
    navigate('/');
    console.log(menuData);
   }
  
},[]);
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
                <div className='rupeeClass' >₹{item.item_price}</div>
              </div>
            </div>

          ))}

      </div>


    </div>

  )
}

export default MorningPage