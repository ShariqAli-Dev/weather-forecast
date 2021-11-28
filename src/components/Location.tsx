import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';
import { State } from '../reducers';

const Location = () => {
  const { getForecast } = bindActionCreators(ActionCreators, useDispatch());
  const { city } = useSelector((state: State) => {
    return {
      city: state.city,
    };
  });

  return (
    <div>
      <button onClick={getForecast}>Click me for forecast</button>
    </div>
  );
};

export default Location;
