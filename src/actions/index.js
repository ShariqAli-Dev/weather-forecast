import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_WEATHER_API;

export const GOT_FORECAST = 'GOT_FORECAST';
export const API_FAILED = 'API_FAILED';

export const getForecast = (city) => async (dispatch) => {
  try {
    const forecast = await axios.get(
      `?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({ type: GOT_FORECAST, payload: forecast.data });
  } catch (err) {
    dispatch({ type: API_FAILED, payload: err });
  }
};
