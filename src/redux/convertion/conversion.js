const CONVERSION = 'src/redux/conversion/CONVERSION';
const USER_CONVERT = 'src/redux/conversion/USER_CONVERT';
const initialState = {
  graph: [],
  results: {
    from: '',
    to: '',
    amount: 0,
    rate: '',
    result: '',
  },
}

export const convertionAction = (convert) => ({
  type: CONVERSION,
  convert,
});

export const userAction = (payload) => ({
  type: USER_CONVERT,
  payload,
});

const convertReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONVERSION:
      const [result] = action.convert
      return {
        ...state,
        results: result,
      };
    
    case USER_CONVERT:
      return {
        ...state,
        results: Object.assign(state.results, action.payload),
      }
    
    default: 
      return state;
  }
};

export default convertReducer;