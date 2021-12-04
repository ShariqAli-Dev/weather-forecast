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
    <div className='flex items-center h-10 my-auto text-white bg-blue-500 rounded-full'>
      <button onClick={onSubmit} className='cursorpointer' type='submit'>
        <SearchBarIcon />
      </button>
      <input
        className='w-4/6 text-lg text-center placeholder-white bg-blue-500 focus:outline-none'
        type='text'
        id='city'
        name='city'
        value={formValue}
        onChange={onChange}
        placeholder='search city'
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getForecast })(Searchbar);
