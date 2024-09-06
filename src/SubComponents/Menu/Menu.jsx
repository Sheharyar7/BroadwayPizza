import React from 'react'
import menuImg from '../../images/menuimage.jpg'
import Navbar1 from '../Navbar1/Navbar1'

export default function Menu() {
  return (
    <>
    <Navbar1 text="Our Menu"/>
    <div className="container-fluid">
        <div className="d-flex justify-content-center">
      <img src={menuImg} alt="" />
    </div>
      </div>
    </>
  )
}
