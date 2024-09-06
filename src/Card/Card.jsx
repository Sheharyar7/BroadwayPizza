import React from 'react'
import './Card.css';
import { fooditems } from '../Dummydata/Dummydata';

export default function Card() {
  return (
    <>
    <div className='row '>
      
      {
        fooditems.map((v,i)=>{
          return(
            <div className="col-3" key={i}>
          <ChildCard value={v} />
                </div>

        )
        })
      }
      </div>
    </>
  )
}
function ChildCard({value}){
  return(
<div className='cardrow my-2 p-2'>
                <img src={value.image} className="card-img rounded-1" alt="Azadi 2K24" />
                <div className="d-flex justify-content-between my-3 ">
                  <span className="card-text row1textbg ">New!</span>
                  <span className="row1textbg2">Rs 449</span>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <p className="card-text ">{value.name}</p>
                  <button className="btn btn-warning row1btn d-flex align-items-center rounded-circle">
                    <span>+</span>
                  </button>
                </div>
                <p className="row1text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem totam voluptatem quasi.</p>
              </div>
  )
}
export {ChildCard}