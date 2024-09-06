import React, { useEffect } from 'react';
import './NavbarSlider.css';
import '../SubComponents/Navbar1/Navbar1.css';
import contract from '../images/asset 10.svg'
import about from '../images/asset 4.svg'
import blog from '../images/asset 5.svg'
import feedback from '../images/asset 6.svg'
import catering from '../images/asset 7.svg'
import corporate from '../images/asset 8.svg'
import franchise from'../images/asset 9.svg'
import { Link } from 'react-router-dom';

export default function NavbarSlider({setShowSlider}) {
    useEffect(() => {
        const sidebar = document.querySelector('.sidebarRow');
        sidebar.classList.add('open');
    
        return () => {
          sidebar.classList.remove('open');
        };
      }, []);
    
      return (
        <>
          <div className='sidebarRow'>
            <ul className='border border-rounded'>
              <div className="d-flex justify-content-between p-2 crossicon">
                <h3 className='mb-4 '>Menu</h3>
                <p onClick={() => setShowSlider(false)}>&#10006;</p>
              </div>
              <li className='border border-rounded p-2'>
              <Link to={'/about-us'}><img src={about} alt="About" style={{ width: 36+'px' }} />About</Link> 
              </li>
            <li className='border border-rounded p-2'> <Link to={'/blogs'}><img src={blog} alt="" style={{width: 36+'px'}}/>Blog
            </Link></li>
            <li className='border border-rounded p-2'> <Link to={'/feedback'}><img src={feedback} alt="" style={{width: 36+'px'}}/>Feedback</Link></li>
            <li className='border border-rounded p-2'> <Link to={'/catering'}> <img src={catering} alt="" style={{width: 36+'px'}}/>Catering</Link></li>
            <li className='border border-rounded p-2'><img src={corporate} alt="" style={{width: 36+'px'}}/>Corporate</li>
            <li className='border border-rounded p-2'><img src={franchise} alt="" style={{width: 36+'px'}}/>Franchise</li>
            <li className='border border-rounded p-2'><img src={contract} alt="" style={{width: 36+'px'}}/>Contact</li>
          </ul>
        </div>
    
    </>
  );
}
