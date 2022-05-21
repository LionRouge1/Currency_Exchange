import React from "react";
import { useState } from 'react';

const FilterInput = ({ filter }) => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(
      e.target.value
    );
    
    filter(search);
  }
  return (
    <input
      type="search"
      id="schcurr"
      onChange={handleChange}
      value={search}
    />
  )
};

export default FilterInput;