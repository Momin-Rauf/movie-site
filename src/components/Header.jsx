import React from 'react';
import './css-files/Header.css';
import { Link } from 'react-scroll';
import img from './image.png';

const Header = () => {
  return (
    <header className='Header'>
      <nav className='nav'>
        <Link to='home' smooth={true} delay={2}>
          
          <h1 id='heading-nav' style={{ cursor: 'pointer' }}>
            Movie App
          </h1>
        </Link>

        <div className="logo"><img class='reel' src={img}/></div>
      </nav>
    </header>
  );
};

export default Header;
