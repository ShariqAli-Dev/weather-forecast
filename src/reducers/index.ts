import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import forecastDummyData from '../dummyData/forecast';
import { ActionTypes } from '../actions/actionTypes';

type Action = {
  type: string;
  payload?: any;
};

const inititalState = forecastDummyData;

// https://www.youtube.com/watch?v=udr2rx_B99w&ab_channel=LaithHarb
const reducer = (state = inititalState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GOT_FORECAST:
      return action.payload!;
    case ActionTypes.API_FAILED:
      return state;
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type State = ReturnType<typeof reducer>;
