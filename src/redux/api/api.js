import { convertionAction } from "../convertion/conversion";
import { getSymbolsAction } from "../exchange/exchange";
import { availableAction, graphAction } from '../graph/graph';

export const currencysymbols = (base = 'USD') => async (dispatch) => {

  fetch('https://api.currencyfreaks.com/currency-symbols')
    .then(response => response.json())
    .then((data) => {
      const symbols = Object.entries(data);
      fetch('https://api.currencyfreaks.com/latest?apikey=3d68979846b346cf9374ef309b793d78 ')
        .then(response1 => response1.json())
        .then(data1 => {
          const { rates } = data1;
          const formated = [];
          symbols.map(([code, name]) => formated.push({
            currencyCode: code,
            countryName: name,
            currencyRate: rates[code],
          }));
          dispatch(getSymbolsAction(formated));
        });
    })
};


export const getconvert = (from, to, amount) => async (dispatch) => {

  const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;
  const response = await fetch(url);
  const data = await response.json();
  const formated = [];
  [{ ...data }].map((item) => formated.push({
    from: item.query.from,
    to: item.query.to,
    amount: item.query.amount,
    rate: item.info.rate,
    result: item.result
  }));
  dispatch(convertionAction(formated));
};

export const supported = () => async (dispatch) => {
  const response = await fetch('https://api.exchangerate.host/symbols');
  const data = await response.json();
  const symbols = Object.keys(data.symbols);

  dispatch(availableAction(symbols))
}

export const graphInfo = (symbol) => async (dispatch) => {

  const start_date = new Date();
  const Fted_date = `${start_date.getFullYear()}-0${start_date.getMonth()}-${start_date.getDate()}`;
  const currentDate = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
  let formatDate = currentDate.split('/').reverse().join('-');
  const url = `https://api.exchangerate.host/timeseries?start_date=${Fted_date}&end_date=${formatDate}&symbols=${symbol}`;

  const response1 = await fetch(url);
  const data1 = await response1.json();
  const ranges = {
    X: Object.keys(data1.rates),
    Y: Object.values(data1.rates).map((rate) => rate[symbol]),
  }

  dispatch(graphAction(ranges));
}
