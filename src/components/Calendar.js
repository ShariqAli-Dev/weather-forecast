import { useState } from 'react';
import CalenderIcon from './CalendarIcon';
import Days from '../data/days';
import Months from '../data/months';
import Clock from './Clock';

const Calendar = () => {
  const [time, setTime] = useState(new Date());

  return (
    <div>
      <div className='flex invisible sm:visible'>
        <CalenderIcon />
        <div style={{ color: '#1A86E9' }}>
          <Clock />
          <p className='text-sm font-semibold'>
            {Days[time.getDay()]} {time.getDate()}
          </p>
          <p className='text-sm font-semibold'>{Months[time.getMonth()]}</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
