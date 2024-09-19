import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Logo from '../../Logo/Logo'
import cardimg from '../../images/aboutpage.png'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-1" >
    <Navbar />
    </div>
    <div className="col-11">
    <Logo/>
    <div className="d-flex justify-content-center flex-column align-items-center">
    <h3>Our Blogs</h3>
    <div>
<div class="card" style={{width: 18+'rem'}}>
  <img class="card-img-top" src={cardimg} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text my-2">Pakistan's best pizza House</p>
    <Link to='/content' class="btn btn-warning">Check it</Link>
  </div>
</div>    </div>
    </div>
    </div>
    </div>
    </div>

      
    </>
  )
}
