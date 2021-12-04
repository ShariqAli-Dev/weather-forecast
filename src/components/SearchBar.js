import { useState } from 'react';
import SearchBarIcon from './SearchBarIcon';

const initialFormValues = {
  city: '',
};

const Searchbar = (props) => {
  // TODO: On erro submit where city is typed incorrectly. Send a toast error
  // const { getForecast } = bindActionCreators(actionCreators, useDispatch);
  const [formValues, setFormValues] = useState(initialFormValues);
  const onChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('something happening');
    // getForecast('new york');
    // getForecast('new york');
  };

  return (
    <div className='flex items-center h-10 my-auto text-white bg-blue-500 rounded-full'>
      <button onClick={onSubmit} className='cursorpointer' type='submit'>
        <SearchBarIcon />
      </button>
      <input
        className='w-4/6 text-lg text-center placeholder-white bg-blue-500 focus:outline-none'
        type='text'
        id='city'
        name='city'
        value={formValues.city}
        onChange={onChange}
        placeholder='search city'
      />
    </div>
  );
};

export default Searchbar;
