import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';
import { State } from '../reducers';
import LocationIcon from './LocationIcon';
const Location = () => {
  const { getForecast } = bindActionCreators(ActionCreators, useDispatch());
  const { city, latitude, longitude } = useSelector((state: State) => {
    return {
      city: state.city.name,
      latitude: state.city.coord.lat.toFixed(2),
      longitude: state.city.coord.lon.toFixed(2),
    };
  });

  return (
    // TODO: MAKE RESPONSIVE
    <div className='flex invisible sm:visible'>
      <LocationIcon />
      <div style={{ color: '#1A86E9' }}>
        <p className='text-3xl font-semibold'>{city}</p>
        <p className='text-sm font-semibold'>
          {latitude}° N, {longitude}° E
        </p>
      </div>
    </div>
  );
};

export default Location;
