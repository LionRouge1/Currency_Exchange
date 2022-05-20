const GET_SYMBOLS_SUCCEED = 'src/redux/exchange/GET_SYMBOLS_SUCCEED';
const initialState = {
  base: 'USD',
  currencies: [],
};

export const getSymbolsAction = (currency) => ({
  type: GET_SYMBOLS_SUCCEED,
  currency,
});

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SYMBOLS_SUCCEED:
      return {
        ...state,
        currencies: [...action.currency],
      };

    default:
      return state;
  }
};

export default currencyReducer;
