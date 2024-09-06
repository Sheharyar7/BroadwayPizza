import React from 'react';
import logoImg from '../images/asset 0.png'
import delivery from '../images/delivery.png';
import takeaway from '../images/takeaway.png';
import './LoginForm.css';

export default function LoginForm({ setShowForm }) {
  return (
    <div className="loginform-overlay">
      <div className="loginform-container p-4">
        <div className="d-flex justify-content-between ">
          <div style={{ width: 1080 + 'px' }}>
          <img src={logoImg} alt="logo" style={{width: 23+'%'}}/>
          </div>
          <span onClick={() => setShowForm(false)} style={{ cursor: 'pointer' }}>
            &#10006;
          </span>
        </div>
        <div className="d-flex justify-content-around align-items-center margintop">
          <div className="d-flex w-25">
            <img src={delivery} alt="delivery" className="delivery mx-1" />
            <p className='formtxt'>DELIVERY</p>
          </div>
          <div className="d-flex">
            <img src={takeaway} alt="takeaway" className="pickup mx-1" />
            <p className='formtxt'>PICKUP</p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="selectCity" className="form-label">Select City</label>
            <select name="city" id="selectCity" className="form-control w-100" defaultValue="">
              <option value="" disabled>Select a city</option>
              <option value="Lahore">Lahore</option>
              <option value="Multan">Multan</option>
              <option value="Karachi">Karachi</option>
              <option value="Peshawar">Peshawar</option>
            </select>
            <input type="tel" className="form-control w-100 mt-4" placeholder="Eg. +92-32XXXXXXXX" />
            <button className="btn btn-warning mt-4 w-100 formbtn">SAVE LOCATION</button>
          </div>
        </form>
      </div>
    </div>
  );
}
