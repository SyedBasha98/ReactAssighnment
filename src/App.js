import React from 'react';
import './App.css';
import searchIcon from './Components/Images/Frame 51.png'
import Profile from './Components/Images/Frame 52.png'
import BookMark from './Components/Images/Frame 53.png'
import Bag from './Components/Images/Frame 54.png'
import AllBags from './Components/Images/Frame 461.png'
import VanityPouch from './Components/Images/Frame 50.png'
import ToteBags from './Components/Images/Frame 49.png'
import DuffleBag from './Components/Images/Frame 13.png'
import LaptopSleves from './Components/Images/Frame 19.png'
import MessengerBag from './Components/Images/Frame 12.png'
import SlingBag from './Components/Images/Frame 22.png'
import HandBags from './Components/Images/Frame 20.png'
import Card from './Components/Images/Frame 477.png'
function App() {
  return (
    <div className="App">
   
      <header>
      <div className='headerContainer'>
      <div className='heardCard'>
        <h1 className="title">
        <span>T</span>
        <span>A</span>
        <span>N</span>
        <span>N</span>
        <span></span>
        <span>T</span>
        <span>R</span>
        <span>I</span>
        <span>M</span>
        </h1>
      </div>
      <div className='headerimageContainer'>
      <div className='search-container'>
        <img src={searchIcon} className="search" alt="search icon" />
      </div>
        <img src={Profile} className='search' alt="profile icon" />
        <img src={BookMark} className='search' alt="profile icon" />
        <img src={Bag} className='search' alt="profile icon" />
      </div>
      </div>
      <div className='headertitle'>
        <h1 className='heading'>Bags</h1>
        <h1 className='heading'>Travel</h1>
        <h1 className='heading'>Accessories</h1>
        <h1 className='heading'>Gifting</h1>
        <h1 className='heading'>Jewellery</h1>
      </div>
      <div className='categoryContainer'>
        <div className='categoryIcon'>
        <img src={AllBags} className='categoryitems' alt='all bags' />
        <h1 className='heading1'>All Bags</h1>
        </div>
        <div className='categoryIcon'>
        <img src={VanityPouch} className='categoryitems' alt='all bags' />
        <h1 className='heading1'>Vanity Pouch</h1>
        </div>
        <div className='categoryIcon'>
        <img src={ToteBags} className='categoryitems' alt='all bags' />
        <h1 className='heading'>Tote Bags</h1>
        </div>
        <div className='categoryIcon'>
        <img src={DuffleBag} className='categoryitems' alt='all bags' />
        <h1 className='heading'>Duffle Bags</h1>
        </div>
        <div className='categoryIcon'>
        <img src={LaptopSleves} className='categoryitems' alt='all bags' />
        <h1 className='heading'>Laptop sleeve</h1>
        </div>
        <div className='categoryIcon'>
        <img src={MessengerBag} className='categoryitems' alt='all bags' />
        <h1 className='heading'>Messenger Bags</h1>
        </div>
        <div className='categoryIcon'>
        <img src={SlingBag} className='categoryitems' alt='all bags' />
        <h1 className='heading'>Sling Bags</h1>
        </div>
        <div className='categoryIcon'>
        <img src={HandBags} className='categoryitems' alt='all bags' />
        <h1 className='heading'>Hand Bags</h1>
        </div>
      </div>
      
      </header>
      <div>
        <div>
          <img src={Card} className='cardImages' alt='cards'/>
          <img src={Card} className='cardImages' alt='cards'/>
        </div>
      </div>
    </div>
  );
}

export default App;
