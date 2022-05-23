import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import './styles/currency.css';

const Currency = ({ currcy }) => {
  const {
    currencyCode,
    countryName,
    currencyRate,
    show,
  } = currcy;
  const navigate = useNavigate();

  const handleClick = (Ccode) => {
    navigate(`convertion/${Ccode}?name=${countryName}&rate=${currencyRate}`);
  };
  return (
    <li
      data-testid={`item${currencyCode}`}
      onClick={() => handleClick(currencyCode)}
      style={{ display: show === false ? 'none' : 'grid' }}
      aria-hidden="true"
    >
      <FiArrowRightCircle />
      <div>
        <p className="currency">
          {countryName}
          (
          {currencyCode}
          )
        </p>
        <p className="rate">{currencyRate}</p>
      </div>

    </li>
  );
};

export default Currency;
