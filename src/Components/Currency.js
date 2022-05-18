import React from 'react';
import { useNavigate } from 'react-router-dom';

const Currency = ({currcy}) => {
  const { currencyCode, countryName, currencyRate } = currcy;
  const navigate = useNavigate();
  const handleClick = (Ccode) => {
    navigate(`convertion/${Ccode}`);
  }
  return (
    <li onClick={() => handleClick(currencyCode)}>{countryName}({currencyCode})  {currencyRate}</li>
  )
};

export default Currency;