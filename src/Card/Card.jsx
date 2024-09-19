import React, { useRef, useEffect } from 'react';
import './Card.css';
import { fooditems } from '../Dummydata/Dummydata';
import { Link } from 'react-router-dom';

export default function Card({ activeitem }) {
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeitem]);

  return (
    <>
      <div className='row'>
        {fooditems.map((v, i) => {
          return (
            <div className="col-3" key={i}>
              <ChildCard value={v} isActive={v.id === activeitem} ref={v.id === activeitem ? activeRef : null} />
            </div>
          );
        })}
      </div>
    </>
  );
}

const ChildCard = React.forwardRef(({ value, isActive }, ref) => {
  return (
    <div className={`cardrow my-2 p-2 ${isActive ? 'activecard' : ''}`} ref={ref}>
      <img src={value.image} className="card-img rounded-1" alt="Azadi 2K24" />
      <div className="d-flex justify-content-between my-3">
        <span className="card-text row1textbg ">New!</span>
        <span className="row1textbg2">Rs {value.price}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="card-text">{value.name}</p>
        <button className="btn btn-warning row1btn d-flex align-items-center rounded-circle">
          <Link to={`/cart-items/${value.id}`}><span>+</span></Link>
        </button>
      </div>
      <p className="row1text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem totam voluptatem quasi.</p>
    </div>
  );
});

export { ChildCard };
