import morningIcon from '../images/morningIcon.png'
import MiddayIcon from '../images/MiddayIcon.png'
import LunchIcon from '../images/LunchIcon.png'
import sunsetIcon from '../images/sunsetIcon.png'
import moonlightIcon from '../images/moonlightIcon.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Pages/HomePage.css';


const HomePage = () => {
  const borderColors = ['#FF7043', '#228B22', '#FF1493', '#00008B', '#C58940'];
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
    },
    {
      "item_name": "Poha",
      "item_price": 60,
      "item_image": "https://i.postimg.cc/KYP61XRH/istockphoto-670526200-1024x1024.jpg"
    },
    {
      "item_name": "Paratha",
      "item_price": 80,
      "item_image": "https://i.postimg.cc/YSgjsSjy/istockphoto-1189079893-1024x1024.jpg"
    },
    {
      "item_name": "Upma",
      "item_price": 70,
      "item_image": "https://i.postimg.cc/2jTJZFT2/istockphoto-1227085744-1024x1024.jpg"
    },
    {
      "item_name": "Chole Bhature",
      "item_price": 120,
      "item_image": "https://i.postimg.cc/kMtsnQz2/istockphoto-1318649094-1024x1024.jpg"
    },
    {
      "item_name": "Samosa",
      "item_price": 30,
      "item_image": "https://i.postimg.cc/mrYRf14J/istockphoto-502663991-1024x1024.jpg"
    },
    {
      "item_name": "Vada Pav",
      "item_price": 50,
      "item_image": "https://i.postimg.cc/hPvdDcfp/istockphoto-1157164148-1024x1024.jpg"
    },
    {
      "item_name": "Paneer Tikka",
      "item_price": 150,
      "item_image": "https://i.postimg.cc/hGBvdBtF/istockphoto-1186759790-1024x1024.jpg"
    },
    {
      "item_name": "Chai",
      "item_price": 20,
      "item_image": "https://i.postimg.cc/gkpGsDPR/istockphoto-1297483389-1024x1024.jpg"
    }
  ]
  const middayMunchData = [
    {
      "item_name": "Paneer Tikka",
      "item_price": 150,
      "item_image": "https://i.postimg.cc/hGBvdBtF/istockphoto-1186759790-1024x1024.jpg"
    },
    {
      "item_name": "Veg Biryani",
      "item_price": 200,
      "item_image": "https://i.postimg.cc/PxSd2SBK/istockphoto-1437432698-1024x1024.jpg"
    },
    {
      "item_name": "Chole Bhature",
      "item_price": 130,
      "item_image": "https://i.postimg.cc/kMtsnQz2/istockphoto-1318649094-1024x1024.jpg"
    },
    {
      "item_name": "Aloo Paratha",
      "item_price": 90,
      "item_image": "https://i.postimg.cc/YSgjsSjy/istockphoto-1189079893-1024x1024.jpg"
    },
    {
      "item_name": "Masala Dosa",
      "item_price": 120,
      "item_image": "https://i.postimg.cc/qRp4xrZ7/deepal-tamang-5o-F7d-h-PJG4-unsplash.jpg"
    },
    {
      "item_name": "Rajma Chawal",
      "item_price": 120,
      "item_image": "https://i.postimg.cc/k48CCjSn/istockphoto-1432801316-1024x1024.jpg"
    },
    {
      "item_name": "Samosa",
      "item_price": 30,
      "item_image": "https://i.postimg.cc/mrYRf14J/istockphoto-502663991-1024x1024.jpg"
    },
    {
      "item_name": "Vada Pav",
      "item_price": 50,
      "item_image": "https://i.postimg.cc/hPvdDcfp/istockphoto-1157164148-1024x1024.jpg"
    },
    {
      "item_name": "Pav Bhaji",
      "item_price": 130,
      "item_image": "https://i.postimg.cc/hG2gMzBB/istockphoto-1438867572-1024x1024.jpg"
    },
    {
      "item_name": "Gulab Jamun",
      "item_price": 50,
      "item_image": "https://i.postimg.cc/wTQrhKHK/istockphoto-1188000786-1024x1024.jpg"
    }
  ]
  const LunchLuxuriesData = [
    {
      "item_name": "Veg Biryani",
      "item_price": 200,
      "item_image": "https://i.postimg.cc/PxSd2SBK/istockphoto-1437432698-1024x1024.jpg"
    },
    {
      "item_name": "Paneer Butter Masala",
      "item_price": 220,
      "item_image": "https://i.postimg.cc/cChM19Fp/istockphoto-885881832-1024x1024.jpg"
    },
    {
      "item_name": "Mushroom Curry",
      "item_price": 180,
      "item_image": "https://i.postimg.cc/nVNn0FTQ/istockphoto-1147258041-1024x1024.jpg"
    },
    {
      "item_name": "Navratan Korma",
      "item_price": 240,
      "item_image": "https://i.postimg.cc/wj733fWh/istockphoto-851423340-1024x1024.jpg"
    },
    {
      "item_name": "Malai Kofta",
      "item_price": 240,
      "item_image": "https://i.postimg.cc/hhRzBS0p/istockphoto-1203165280-1024x1024.jpg"
    },
    {
      "item_name": "Dal Makhani",
      "item_price": 160,
      "item_image": "https://i.postimg.cc/5y0pCmcZ/istockphoto-1170374719-1024x1024.jpg"
    },
    {
      "item_name": "Palak Paneer",
      "item_price": 220,
      "item_image": "https://i.postimg.cc/qRcWLw5q/istockphoto-1273066728-1024x1024.jpg"
    },
    {
      "item_name": "Shahi Paneer",
      "item_price": 220,
      "item_image": "https://i.postimg.cc/pT8PtK1M/istockphoto-1327746667-1024x1024.jpg"
    },
    {
      "item_name": "Chole Bhature",
      "item_price": 180,
      "item_image": "https://i.postimg.cc/kMtsnQz2/istockphoto-1318649094-1024x1024.jpg"
    },
    {
      "item_name": "Rasmalai",
      "item_price": 100,
      "item_image": "https://i.postimg.cc/bvgvBxMC/istockphoto-1411786526-1024x1024.jpg"
    }
  ]
  const SunsetSipsData = [
    {
      "item_name": "Mango Lassi",
      "item_price": 80,
      "item_image": "https://i.postimg.cc/RZPLfDQG/istockphoto-889609324-1024x1024.jpg"
    },
    {
      "item_name": "Masala Chai",
      "item_price": 50,
      "item_image": "https://i.postimg.cc/wMsy764P/istockphoto-1336601313-1024x1024.jpg"
    },
    {
      "item_name": "Cold Coffee",
      "item_price": 90,
      "item_image": "https://i.postimg.cc/vT9KXVSv/istockphoto-186835599-1024x1024.jpg"
    },
    {
      "item_name": "Green Tea",
      "item_price": 60,
      "item_image": "https://i.postimg.cc/Z5rdZKXD/istockphoto-614992478-1024x1024.jpg"
    },
    {
      "item_name": "Fresh Lime Soda",
      "item_price": 70,
      "item_image": "https://i.postimg.cc/m2WpBVDL/istockphoto-1441968893-1024x1024.jpg"
    },
    {
      "item_name": "Strawberry Smoothie",
      "item_price": 120,
      "item_image": "https://i.postimg.cc/jjCC2H52/istockphoto-666879494-1024x1024.jpg"
    },
    {
      "item_name": "Butter Milk",
      "item_price": 50,
      "item_image": "https://i.postimg.cc/NMsWx437/istockphoto-1159362126-1024x1024.jpg"
    },
    {
      "item_name": "Watermelon Juice",
      "item_price": 100,
      "item_image": "https://i.postimg.cc/nzJ50tWD/istockphoto-613697362-1024x1024.jpg"
    },
    {
      "item_name": "Hot Chocolate",
      "item_price": 100,
      "item_image": "https://i.postimg.cc/pLYRvqtz/sincerely-media-j-EIuuvnk1-W8-unsplash.jpg"
    },
    {
      "item_name": "Apple Cider",
      "item_price": 120,
      "item_image": "https://i.postimg.cc/y8MsCxxg/istockphoto-1369237753-1024x1024.jpg"
    }
  ]
  const moonlightData = [
    {
      "item_name": "Dal Makhani",
      "item_price": 160,
      "item_image": "https://i.postimg.cc/5y0pCmcZ/istockphoto-1170374719-1024x1024.jpg"
    },
    {
      "item_name": "Malai Kofta",
      "item_price": 240,
      "item_image": "https://i.postimg.cc/hhRzBS0p/istockphoto-1203165280-1024x1024.jpg"
    },
    {
      "item_name": "Paneer Butter Masala",
      "item_price": 220,
      "item_image": "https://i.postimg.cc/cChM19Fp/istockphoto-885881832-1024x1024.jpg"
    },
    {
      "item_name": "Navratan Korma",
      "item_price": 240,
      "item_image": "https://i.postimg.cc/wj733fWh/istockphoto-851423340-1024x1024.jpg"
    },
    {
      "item_name": "Shahi Paneer",
      "item_price": 220,
      "item_image": "https://i.postimg.cc/pT8PtK1M/istockphoto-1327746667-1024x1024.jpg"
    },
    {
      "item_name": "Mushroom Masala",
      "item_price": 180,
      "item_image": "https://i.postimg.cc/nVNn0FTQ/istockphoto-1147258041-1024x1024.jpg"
    },
    {
      "item_name": "Chole Bhature",
      "item_price": 180,
      "item_image": "https://i.postimg.cc/kMtsnQz2/istockphoto-1318649094-1024x1024.jpg"
    },
    {
      "item_name": "Aloo Gobi",
      "item_price": 170,
      "item_image": "https://i.postimg.cc/v80GY9vk/istockphoto-1437118767-1024x1024.jpg"
    },
    {
      "item_name": "Vegetable Biryani",
      "item_price": 200,
      "item_image": "https://i.postimg.cc/PxSd2SBK/istockphoto-1437432698-1024x1024.jpg"
    },
    {
      "item_name": "Gulab Jamun",
      "item_price": 80,
      "item_image": "https://i.postimg.cc/wTQrhKHK/istockphoto-1188000786-1024x1024.jpg"
    }
  ]
  const navigate = useNavigate();
  const onMorningMoodsClick = () => {
    navigate("/MorningPage", {
      state: {
        menuData: morningMoodsData,
        color: '#C58940', Name: 'Morning Moods',
        modColor: borderColors[4]
      }
    })
  }
  const onMiddayMoodsClick = () => {
    navigate("/MorningPage", {
      state: {
        menuData: middayMunchData,
        color: '#FF7043', Name: 'Midday Moods',
        modColor: borderColors[0]
      }
    })
  }
  const onLunchLuxuriesClick = () => {
    navigate("/MorningPage", {
      state: {
        menuData: LunchLuxuriesData,
        color: '#228B22', Name: 'Lunch Luxuries',
        modColor: borderColors[1]
      }
    })
  }
  const onSunsetSipsClick = () => {
    navigate("/MorningPage", {
      state: {
        menuData: SunsetSipsData,
        color: '#FF1493', Name: 'Sunset Sips',
        modColor: borderColors[2]
      }
    })
  }
  const onMoonlightStipsClick = () => {
    navigate("/MorningPage", {
      state: {
        menuData: moonlightData,
        color: '#00008B', Name: 'MoonLight Meals',
        modColor: borderColors[3],

      }
    })
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
            <div className='Moods' onClick={onMiddayMoodsClick}>
              <img className='ImageTag' src={MiddayIcon} />
              <span className='Text'>Midday Munch</span>
            </div>
          </div>
        </div>
        <div className='MorningRow'>
          <div className='Morning' style={{ borderColor: borderColors[1] }}>
            <div className='Moods' onClick={onLunchLuxuriesClick}>
              <img className='ImageTag' src={LunchIcon} />
              <span className='Text'>Lunch Luxuries</span>
            </div>
          </div>

          <div className='Morning' style={{ borderColor: borderColors[2] }}>
            <div className='Moods' onClick={onSunsetSipsClick}>
              <img className='ImageTag' src={sunsetIcon} />
              <span className='Text'>Sunset Sips</span>
            </div>
          </div>

        </div>
        <div div className='lastBlock'>
          <div className='Morning' style={{ borderColor: borderColors[3] }}>
            <div className='Mood' onClick={onMoonlightStipsClick}>
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