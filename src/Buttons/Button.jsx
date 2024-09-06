import React, { useRef } from 'react';
import './Button.css';
import { fooditems } from '../Dummydata/Dummydata';

export default function Button() {
  const btnRef=useRef(null)
  function handlePrevious(){
    if(btnRef.current){
      btnRef.current.scrollBy({left: -200, behavior : 'smooth'})
    }
  }
  function handleNext(){
    if(btnRef.current){
      btnRef.current.scrollBy({left: 200, behavior : 'smooth'})
    }
  }
  
  return (
    <>
    <div className="sticky-buttons">
      <div className="container-fluid my-2 d-flex">
           <button className='btn prevbtn' onClick={handlePrevious}>&lt;</button>
        <div className="row no-gutters button-row" ref={btnRef}>
          {fooditems.map((v, i) => (
            <ButtonChild value={v} key={i} />
          ))}
        </div>
        <button className='btn nextbtn' onClick={handleNext}>&gt;</button>
      </div>
    </div>
    </>
  );
}

function ButtonChild({ value }) {
  return (
    <div className="col-auto">
      <button className="btn btn-warning btn-border-dark shadow">{value.name}</button>
    </div>
  );
}

export { ButtonChild };
