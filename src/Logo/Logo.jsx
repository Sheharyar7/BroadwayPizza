import React from 'react';
import './Logo.css';
import logoImage from '../images/asset 0.png'; // Rename the import to 'logoImage'


export default function Logo() {
  return (
    <>
    
      <img src={logoImage} style={{ width: '10%' }} alt="logo" />
    </>
  );
}
