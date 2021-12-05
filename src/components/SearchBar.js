import { useState } from 'react';
import { connect } from 'react-redux';
import { getForecast } from '../actions';
import SearchBarIcon from './SearchBarIcon';

const Searchbar = ({ getForecast }) => {
  const [formValue, setFormValue] = useState('');

  const onChange = (event) => {
    setFormValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getForecast(formValue);
    setFormValue('');
  };

  return (
    <form
      onClick={onSubmit}
      className='flex items-center h-8 m-10 my-auto text-white bg-blue-500 rounded-full lg:h-11'
    >
      <button className='cursorpointer' type='submit'>
        <SearchBarIcon />
      </button>
      <input
        className='w-4/6 text-base text-center placeholder-white bg-blue-500 md:text-xl lg:text-2xl focus:outline-none'
        type='text'
        id='city'
        name='city'
        value={formValue}
        onChange={onChange}
        placeholder='search city'
      />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getForecast })(Searchbar);
