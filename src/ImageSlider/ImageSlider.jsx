import React from 'react'
import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';

export default function ImageSlider() {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <img src={header1} className="d-block w-100" alt="Image 1" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={header2} className="d-block w-100" alt="Image 2" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={header3} className="d-block w-100" alt="Image 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
    </>
  )
}
