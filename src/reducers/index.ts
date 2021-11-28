import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { GOT_FORECAST } from '../actions';

type Action = {
  type: string;
  payload?: any;
};

const inititalState: { name: string } = {
  name: 'shariq',
};
// https://www.youtube.com/watch?v=udr2rx_B99w&ab_channel=LaithHarb
const reducer = (state = inititalState, action: Action) => {
  switch (action.type) {
    case GOT_FORECAST:
      return state + action.payload;
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
