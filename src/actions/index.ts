import { Dispatch } from 'redux';

export const GOT_FORECAST = 'GOT_FORECAST';

export const getForecast = (weather: string) => (dispatch: Dispatch) => {
  dispatch({ type: GOT_FORECAST, payload: weather });
};
