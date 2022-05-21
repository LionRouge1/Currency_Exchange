import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getconvert } from '../redux/api/api';
import { userAction } from '../redux/convertion/conversion';
import GraphDesign from './graphDesign';
import Convertion from './Convertion';

const ConvertCurrency = () => {
  const { results } = useSelector(state => state.convertion);
  const { from, to, amount } = results;

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
    } else {
      console.log('Please fill all the inputs !!!');
    }

  }

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
  }

  if (ableSymbols.includes(currency)) {
    return (
      <>
        <div><h2>{countryName} ({currency}) <span>{currencyRate}</span></h2></div>
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
      </>
    )
  };

  return (
    <div>
      <div><h2>{countryName} ({currency}) <span>{currencyRate}</span></h2></div>
      <p>This page is in contrustion... <br /> No graph available yet <br /> No convertion available yet</p>
      <button onClick={goback}>Go back</button>
    </div>
  )
};

export default ConvertCurrency;