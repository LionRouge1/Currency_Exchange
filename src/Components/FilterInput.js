import React from "react";
import { useState } from 'react';
import { HiOutlineSearchCircle } from 'react-icons/hi'
import './styles/filterinput.css';

const FilterInput = ({ filter }) => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(
      e.target.value
    );

    filter(search);
  }
  return (
    <div className="input_box">
      <h1>Exchange Currency</h1>
      <div className="base">
        <h4>BASE</h4>
        <p>US Dollar (USD)</p>
        <span>1.0</span>
      </div>
      <div className="input">
      <input
        type="search"
        id="schcurr"
        onChange={handleChange}
        value={search}
      />
      <span><HiOutlineSearchCircle style={{fontSize: '20px'}} /></span>
      </div>
    </div>
  )
};

export default FilterInput;