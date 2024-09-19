import React  from 'react';
import './Navbar1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import logoImg from '../../images/asset 0.png';
import { Link } from 'react-router-dom';

export default function Navbar1({text}) {
 

  return (
    <>
      <div className="sticky-nav">
        <div className="d-flex align-items-center">
          <Link to='/'>
          <span className='nav1span' style={{color:'black'}}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </span></Link>
          <img src={logoImg} alt="logo" style={{ width: '9%' }} />
          
          <p className='navbar1txt fs-4'><strong>{text || 'Navbar Text'}</strong></p>  
        </div>
      </div>
    </>
  );
}
