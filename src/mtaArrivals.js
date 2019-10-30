import axios from 'axios';
import React from 'react';

import ArrivalTimeSeries from './arrivalTimeSeries';

export default class mtaArrivals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jNTimes: [],
      jSTimes: [],
      b52Times: [],
      b38Times: [],
      apiInterval: null,
    };
  }

  componentDidMount() {
    this.getMtaDepartures();

    const apiInterval = setTimeout(() => {
      this.getMtaDepartures();
    }, 1000 * 60 * 1); // every two minutes

    this.setState({ apiInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.apiInterval);
  }

  getMtaDepartures = () => {
    console.log('getting mta departures');
    // get J subway times
    axios.get('/subway').then((res) => {
      const southDepartures = res.data.lines[0].departures.S;
      const northDepartures = res.data.lines[0].departures.N;

      // get first 3 timestamps for each line
      const northTimes = [];
      const southTimes = [];
      for (let i = 0; i < 3; i++) {
        northTimes.push(northDepartures[i].time);
        southTimes.push(southDepartures[i].time);
      }

      this.setState({
        jNTimes: northTimes,
        jSTimes: southTimes,
      });
    });

    // get b52 times
    axios.get('/bus', { params: { route: 52 } }).then((res) => {
      const busTrips = res.data;

      // get departures
      const departures = [];
      busTrips.forEach((trip) => {
        departures.push(trip.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime || trip.MonitoredVehicleJourney.OriginAimedDepartureTime);
      });

      this.setState({ b52Times: departures });
    });

    // get b38 times
    axios.get('/bus', { params: { route: 38 } }).then((res) => {
      const busTrips = res.data;

      // get departures
      const departures = [];
      busTrips.forEach((trip) => {
        departures.push(trip.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime || trip.MonitoredVehicleJourney.OriginAimedDepartureTime);
      });

      this.setState({ b38Times: departures });
    });
  };

  render() {
    return (
      <div>
        <ArrivalTimeSeries id="jN" timesArray={this.state.jNTimes} isUnix />
        <ArrivalTimeSeries id="jS" timesArray={this.state.jSTimes} isUnix />
        <ArrivalTimeSeries id="b52" timesArray={this.state.b52Times} />
        <ArrivalTimeSeries id="b38" timesArray={this.state.b38Times} />
      </div>
    );
  }
}
