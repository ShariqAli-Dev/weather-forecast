import Location from './components/Location';

const App = () => {
  return (
    <div className='flex flex-col h-screen m-5 font-sans '>
      {/* Header Component */}
      <div className='flex justify-between'>
        <Location />
        {/* <Location />
        <Location /> */}
        <div></div>
        <div></div>
      </div>

      {/* Days/ center component */}
      <div className='m-auto'>I am days component</div>

      {/* bottom navigation */}
      <div className='m-auto'>I am nav</div>
    </div>
  );
};

export default App;
