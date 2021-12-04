import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return <p className='text-xl font-semibold '>{time.toLocaleTimeString()}</p>;
};

export default Clock;
