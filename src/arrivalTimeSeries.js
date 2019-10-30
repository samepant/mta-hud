import moment from 'moment';
import React from 'react';

const addZero = (num) => {
  const numString = num.toString();
  if (numString.length === 1) {
    return '0' + numString;
  }

  return numString;
};
const arrivalTimeSeries = (props) => {
  return (
    <div id={props.id} className="time-list-container">
      <ul className="time-list">
        {props.timesArray.map((timestamp, index) => (
          <li key={timestamp.toString() + index}>
            {addZero(props.isUnix ? moment.unix(timestamp).diff(moment(), 'minutes') : moment(timestamp).diff(moment(), 'minutes'))}
            <span className="min-label">m</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default arrivalTimeSeries;
