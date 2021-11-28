import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

axios.defaults.baseURL = process.env.REACT_APP_WEATHER_API;

const getForecast = () => async (dispatch: Dispatch) => {
  try {
    const city = 'London';
    const forecast = await axios.get(
      `?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({ type: ActionTypes.GOT_FORECAST, payload: forecast.data });
  } catch (err) {
    dispatch({ type: ActionTypes.API_FAILED, payload: err });
  }
};

const actionCreators = {
  getForecast,
};

export default actionCreators;
