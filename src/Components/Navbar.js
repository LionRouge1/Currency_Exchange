import React from 'react';
import { useState, useEffect } from 'react';

const Navbar = () => {

  const [currentDate, setCurrenDate] = useState('');

  useEffect(() => {
    setInterval(() => {
      const ctDate = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date());
      setCurrenDate(
        ctDate,
      )
    }, 1000)
  });
  return (
    <nav>
      <div className='date_box'><h1>Date of day</h1>{currentDate}</div>
    </nav>
  )
};

export default Navbar;