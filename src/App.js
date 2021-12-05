import Location from './components/Location';
import SearchBar from './components/SearchBar';
import Calendar from './components/Calendar';
import Days from './components/Days';

const App = () => {
  return (
    // grab the weather when the component loads
    <div className='flex flex-col h-screen m-5 font-sans '>
      {/* Header Component */}
      <div className='flex justify-between '>
        <Location />
        <SearchBar />
        <Calendar />
      </div>

      {/* Days/ center component */}
      <div className='m-auto'>
        <Days />
      </div>

      {/* bottom navigation */}
      <div className='m-auto'>I am nav</div>
    </div>
  );
};

export default App;
