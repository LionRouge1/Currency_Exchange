import React, { useContext } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { getconvert } from '../redux/api/api';
import { userAction } from '../redux/convertion/conversion';
import GraphDesign from './graphDesign';
import Convertion from './Convertion';
import screenContext from './screenContex';
import './styles/convertionpage.css';

const ConvertCurrency = () => {
  const { results } = useSelector((state) => state.convertion);
  const { from, to, amount } = results;
  const screenWidth = useContext(screenContext);

  const ableSymbols = useSelector((state) => state.ranges.available);

  const [params] = useSearchParams();
  const countryName = params.get('name');
  const currencyRate = params.get('rate');

  const dispatch = useDispatch();

  const { currency } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (to !== '' && amount !== 0 && amount !== '') {
      dispatch(getconvert(from, to, amount));
    }
  };

  const handleChanges = (e) => {
    const exchge = {
      ...results,
      from: currency,
      result: '',
      [e.target.name]: e.target.value,
    };

    dispatch(userAction(exchge));
  };

  const goback = () => {
    const exchge = {
      from: '',
      to: '',
      amount: 0,
      rate: '',
      result: '',
    };
    dispatch(userAction(exchge));
    navigate(-1);
  };

  const box = screenWidth ? 'phoneBox' : 'box';

  if (ableSymbols.includes(currency)) {
    return (
      <div className="convert_box">
        <div style={{ height: screenWidth ? '20vh' : '' }} className="heading">
          <h2>
            {countryName}
            (
            {currency}
            )
            <span>{currencyRate}</span>
          </h2>
        </div>
        <div className={box}>
          <GraphDesign
            symbol={currency}
          />
          <Convertion
            handleChanges={handleChanges}
            handleSubmit={handleSubmit}
            ableSymbols={ableSymbols}
            results={results}
            goback={goback}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="convert_box">
      <div className="heading">
        <h2>
          {countryName}
          {' '}
          (
          {currency}
          )
          {' '}
          <span>{currencyRate}</span>
        </h2>
      </div>
      <div className="no_mach">
        <p>
          This page is in contrustion...
          {' '}
          <br />
          No graph available yet
          {' '}
          <br />
          No convertion available yet
        </p>
        <button type="button" onClick={goback}>
          {' '}
          <BsArrowLeftCircle />
          {' '}
          Go back
        </button>
      </div>

    </div>
  );
};

export default ConvertCurrency;
