import React from 'react'
import menuImg from '../../images/menuimage.jpg'
import './Menu.css'
import Logo from '../../Logo/Logo'
import Navbar from '../../Navbar/Navbar'
import aboutimg3 from '../../images/asset 1.png'
import aboutimg4 from '../../images/asset 2.png'
import aboutimg5 from '../../images/asset 3.png'

export default function Menu() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-1" >
    <Navbar />
    </div>
    <div className="col-11">
    <Logo/>
    <div className="container-fluid">
    
        <div className="d-flex justify-content-center flex-column align-items-center">
        <a href={menuImg} download="Menu" >
          <button className="btn btn-success my-4 downloadbtn ">Download Menu</button>
          </a>
      <img src={menuImg} className='mb-4' alt="" />
      <div >
    <img src={aboutimg3} className='img-fluid my-4 img3' alt="" />
    <img src={aboutimg4} className='img-fluid my-4 img4' alt="" />
    <img src={aboutimg5} className='img-fluid my-4 img5' alt="" />
    </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
