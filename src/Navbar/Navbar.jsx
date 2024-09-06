import React from 'react';
import homeIcon from '../images/home_24dp_FFC714_FILL0_wght400_GRAD0_opsz24.svg';
import menuIcon from '../images/menu.svg';
import cartIcon from '../images/cart.svg';
import locationIcon from '../images/location.svg';
import profileIcon from '../images/person.svg';
import headerImg from '../images/menu header.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ setShowSlider }) {
  return (
    <>
      <div className="mt-3">
        <div className="d-flex flex-column justify-content-center">
          <ul className="list-unstyled">
            <li onClick={() => setShowSlider(true)}>
              <img src={headerImg} className="icon header-list" alt="icon 1" />
            </li>
            <li>
              <img src={homeIcon} className="icon" alt="icon 1" />
              <Link to='/'><p className='navbartxt'>Order</p></Link>
            </li>
            <li>
            <Link to={'/menu'}>
              <img src={menuIcon} className="icon" alt="icon 2" />
              <p className='navbartxt'>Menu</p></Link>
            </li>
            <li>
              <Link to={'/cart-items'}><img src={cartIcon} className="icon" alt="icon 3" />
              <p className='navbartxt'>Cart</p>
              </Link>
            </li>
            <li>
            <a href='https://www.google.com/maps/search/broadway+pizza/@31.4607118,74.1872086,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D' target='_blank' ><img src={locationIcon} className="icon" alt="icon 4" /></a>
              <a href='https://www.google.com/maps/search/broadway+pizza/@31.4607118,74.1872086,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D'  target='_blank' >Location</a>
            </li>
            <li>
            <Link to='/profile'><img src={profileIcon} className="icon" alt="icon 5" />
              <p className='navbartxt'>Profile</p> </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
