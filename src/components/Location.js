import { connect } from 'react-redux';

import LocationIcon from './LocationIcon';

const Location = ({ city, latitude, longitude }) => {
  return (
    // TODO: MAKE RESPONSIVE
    <div className='flex invisible sm:visible'>
      <LocationIcon />
      <div style={{ color: '#1A86E9' }}>
        <p className='text-xl font-semibold'>{city}</p>
        <p className='text-sm font-semibold'>
          {latitude}° N, {longitude}° E
        </p>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    city: state.city.name,
    latitude: state.city.coord.lat.toFixed(2),
    longitude: state.city.coord.lon.toFixed(2),
  };
};

export default connect(mapStateToProps, {})(Location);
