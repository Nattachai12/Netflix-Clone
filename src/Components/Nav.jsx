import React, { useEffect, useState } from 'react'
import './../Style/Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }});
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
      src=""
      alt="Netflix Logo"
      className="nav__logo" />

      <img src=""
       alt="Icon"
      className="nav__avatar" />
    </div>
  )
}

export default Nav