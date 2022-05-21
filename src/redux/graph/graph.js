const GET_DATA_SUCCEED = 'src/redux/graph/GET_DATA_SUCCED';
const AVAILABLE_CURRENCY = 'src/redux/graph/AVAILABLE_CURRENCY';
const initialState = {
  available: [],
  ranges: {}
};

export const availableAction = (payload) => ({
  type: AVAILABLE_CURRENCY,
  payload,
})

export const graphAction = (payload) => ({
  type: GET_DATA_SUCCEED,
  payload,
});

const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCEED:
      return {
        ...state,
        ranges: { ...action.payload },
      }
    case AVAILABLE_CURRENCY:
      return {
        ...state,
        available: [...action.payload],
      }

    default:
      return state;
  }
};

export default graphReducer;