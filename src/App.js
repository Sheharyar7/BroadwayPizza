import React, {  useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import ImageSlider from './ImageSlider/ImageSlider';
import Card from './Card/Card';
import Button from './Buttons/Button';
import NavbarSlider from './NavbarSlider/NavbarSlider';
import LoginForm from './Login Form/LoginForm';

function App() {
  const [showform, setShowForm] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const[activeitem , showactiveitem]= useState(null)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowForm(true);
  //     setFormVisible(true);
  //   }, 1000);
  // }, []);

  return (
    <>
      <div className={`container-fluid position-relative ${formVisible ? 'show-form' : ''}`}>
        <div className="loginshow">
          {
            showform ? <LoginForm setShowForm={setShowForm} /> : ''
          }
        </div>
        <div className="row">
            <Navbar />
          <div className="col-11">
              <Logo />
            <ImageSlider />
            <Button showactiveitem={showactiveitem}/>
            <Card activeitem={activeitem} />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
