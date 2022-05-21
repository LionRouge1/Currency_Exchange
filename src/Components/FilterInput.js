import React, { useContext, useState } from 'react';
import { HiOutlineSearchCircle } from 'react-icons/hi';
import screenContext from './screenContex';
import './styles/filterinput.css';

const FilterInput = ({ filter }) => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(
      e.target.value,
    );

    filter(search.trim());
  };
  const screenWidth = useContext(screenContext);
  const phoneH1 = screenWidth ? 'phoneH1' : '';
  const input = screenWidth ? 'phoneInput' : 'input';
  const base = screenWidth ? 'phoneBase' : 'base';

  return (
    <div style={{ height: screenWidth ? '20vh' : '' }} className="input_box">
      <h1 className={phoneH1}>Exchange Currency</h1>
      <div className={base}>
        <h4>BASE</h4>
        <p>US Dollar (USD)</p>
        <span>1.0</span>
      </div>
      <div className={input}>
        <input
          type="search"
          id="schcurr"
          placeholder="Search..."
          onChange={handleChange}
          value={search}
        />
        <span><HiOutlineSearchCircle style={{ fontSize: '20px' }} /></span>
      </div>
    </div>
  );
};

export default FilterInput;
