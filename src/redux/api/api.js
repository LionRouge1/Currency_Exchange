import { convertionAction } from "../convertion/conversion";
import { getSymbolsAction } from "../exchange/exchange";

export const currencysymbols = (base = 'USD') => async (dispatch) => {

  // const currentDate = new Intl.DateTimeFormat('en-GB', {
  //   timeZone: 'America/New_York',
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  // }).format(new Date());
  // let formatDate = currentDate.split('/').reverse().join('-');
  // const url = `https://api.exchangerate.host/timeseries?start_date=${formatDate}&end_date=${formatDate}&base=${base}`;

  // const response1 = await fetch(url);
  // const data1 = await response1.json();
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
  [{...data}].map((item) => formated.push({
    from: item.query.from,
    to: item.query.to,
    amount: item.query.amount,
    rate: item.info.rate,
    result: item.result
  }));
  dispatch(convertionAction(formated));
}
