import React, { useRef } from 'react';
import './Button.css';
import { fooditems } from '../Dummydata/Dummydata';

export default function Button({showactiveitem}) {
  function handlebtnclick(id){
    showactiveitem(id)
  }

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
            <div key={v.id} className="col-auto">
            <ButtonChild value={v} key={i} handlebtnclick={handlebtnclick} />
                      </div>

          ))}
        </div>
        <button className='btn nextbtn' onClick={handleNext}>&gt;</button>
      </div>
    </div>
    </>
  );
}

function ButtonChild({ value,handlebtnclick }) {
  return (
    <div className="col-auto">
      <button className="btn btn-warning btn-border-dark shadow"onClick={()=>{handlebtnclick(value.id)}} >{value.name}</button>
    </div>
  );
}

export { ButtonChild };
