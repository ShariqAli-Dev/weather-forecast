import Location from './components/Location';

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      {/* Header Component */}
      <div className='flex justify-around'>
        <Location />
        <Location />
        <Location />
      </div>

      {/* Days/ center component */}
      <div className='m-auto'>I am days component</div>

      {/* bottom navigation */}
      <div className='m-auto'>I am nav</div>
    </div>
  );
};

export default App;
