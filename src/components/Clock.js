import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <p className='text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl'>
      {time.toLocaleTimeString().replace(/:\d+ /, ' ')}
    </p>
  );
};

export default Clock;
