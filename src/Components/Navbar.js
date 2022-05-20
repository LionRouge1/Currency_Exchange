import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { screenContext } from './screenContex';
import logo from '../logo.svg';
import './styles/navbar.css'

const Navbar = () => {

  const [currentDate, setCurrenDate] = useState('');
  let screenWidth = useContext(screenContext);

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

  let img = screenWidth ? 'phoneImg' : '';
  let date_box = screenWidth ? 'phoneDate_box' : 'date_box';
  const [currency] = useSearchParams();
  const navigate = useNavigate();

  return (
    <nav>
      <img className={img} src={logo} alt="Exchange logo" />
      <IoIosArrowBack
        style={{display: (screenWidth && !!currency.get('name')) ? 'block' : 'none'}}
        onClick={()=> navigate(-1)}
        />
      <p className={date_box}>{currentDate}</p>
      <div className="icons">
        <FaMicrophone />
        <IoSettingsOutline />
      </div>
    </nav>
  )
};

export default Navbar;