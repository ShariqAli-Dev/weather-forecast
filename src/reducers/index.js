import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import forecastDummyData from '../data/forecast';
import { GOT_FORECAST, API_FAILED } from '../actions/';

const inititalState = forecastDummyData;

// https://www.youtube.com/watch?v=udr2rx_B99w&ab_channel=LaithHarb
const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case GOT_FORECAST:
      console.log(action.payload);
      return action.payload;
    case API_FAILED:
      return state;
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
