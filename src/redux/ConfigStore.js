import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import convertReducer from './convertion/conversion';
import currencyReducer from './exchange/exchange';
import graphReducer from './graph/graph';

const rootReducer = combineReducers({
  Currency: currencyReducer,
  convertion: convertReducer,
  ranges: graphReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
