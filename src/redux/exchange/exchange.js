const GET_SYMBOLS_SUCCEED = 'src/redux/exchange/GET_SYMBOLS_SUCCEED';
const FILTE_CURRENCY = 'src/redux/exchange/FILTE_CURRENCY';
const initialState = {
  currencies: [],
};

export const getSymbolsAction = (currency) => ({
  type: GET_SYMBOLS_SUCCEED,
  currency,
});

export const filterAction = (key) => ({
  type: FILTE_CURRENCY,
  key,
});

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SYMBOLS_SUCCEED:
      return {
        ...state,
        currencies: [...action.currency],
      };

    case FILTE_CURRENCY:
      return {
        ...state,
        currencies: [...state.currencies.map((cur) => {
          const { countryName } = cur;
          if (countryName.toUpperCase().includes(action.key.toUpperCase())) {
            return {
              ...cur,
              show: true,
            };
          }

          return {
            ...cur,
            show: false,
          };
        })],
      };

    default:
      return state;
  }
};

export default currencyReducer;
