import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';

const Currency = ({ currcy }) => {
  const { currencyCode, countryName, currencyRate } = currcy;
  const navigate = useNavigate();

  const handleClick = (Ccode) => {
    navigate(`convertion/${Ccode}?name=${countryName}&rate=${currencyRate}`);
  };
  return (
    <li
      onClick={() => handleClick(currencyCode)}
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
