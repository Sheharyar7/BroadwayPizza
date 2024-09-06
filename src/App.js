import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import ImageSlider from './ImageSlider/ImageSlider';
import Card from './Card/Card';
import Button from './Buttons/Button';
import NavbarSlider from './NavbarSlider/NavbarSlider';
import LoginForm from './Login Form/LoginForm';

function App() {
  const [showSlider, setShowSlider] = useState(false);
  const [showform, setShowForm] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
      setFormVisible(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className={`container-fluid position-relative ${formVisible ? 'show-form' : ''}`}>
        <div className="loginshow">
          {
            showform ? <LoginForm setShowForm={setShowForm} /> : ''
          }
        </div>
        <div className="row">
          <div className="col-1 sticky-column sidebar border border-dark-rounded vh-100">
            <Navbar setShowSlider={setShowSlider} />
          </div>
          <div className="col-11">
            <div className="sticky-logo">
              <Logo />
            </div>
            <ImageSlider />
            <Button />
            <Card />
          </div>
        </div>
      </div>
      {showSlider && <NavbarSlider setShowSlider={setShowSlider} />}
    </>
  );
}

export default App;
