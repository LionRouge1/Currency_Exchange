import React from 'react';
import { useState, useEffect } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaMicrophone } from 'react-icons/fa';
import logo from '../logo.svg';
import './styles/navbar.css'

const Navbar = () => {

  const [currentDate, setCurrenDate] = useState('');

  useEffect(() => {
    setInterval(() => {
      const ctDate = new Intl.DateTimeFormat('en-US', {
        // timeZone: 'America/New_York',
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date());
      setCurrenDate(
        ctDate,
      );
    }, 1000);
  });
  return (
    <nav>
      <img src={logo} alt="Exchange logo" />
      <p className='date_box'>{currentDate}</p>
      <div className="icons">
        <FaMicrophone />
        <IoSettingsOutline />
      </div>
    </nav>
  )
};

export default Navbar;