import { connect } from 'react-redux';

export const Days = (props) => {
  console.log(props);
  props.list.map((cast) => {
    // loop through each entry
    // sort the entry by days
    // convert dt to day
    const newDate = new Date(cast.dt_txt);
    console.log(newDate.getDay());
    // console.log(newDate);
  });
  return <div>I am the days component</div>;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {})(Days);
