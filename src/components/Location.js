import { connect } from 'react-redux';

import LocationIcon from './LocationIcon';

const Location = ({ city, latitude, longitude }) => {
  return (
    // TODO: MAKE RESPONSIVE
    <div className='flex invisible sm:visible'>
      <LocationIcon />
      <div style={{ color: '#1A86E9' }}>
        <p className='text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl'>
          {city}
        </p>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl'>
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
