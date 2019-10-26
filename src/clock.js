import moment from "moment";
import React from "react";

export default class clock extends React.Component {
  state = {
    time: moment()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: moment()
    });
  }

  render() {
    return (
      <div className="clock">
        <div className="time hour">{this.state.time.format("h")}</div>
        <div className="time min">{this.state.time.format("mm")}</div>
        <div className="sig">{this.state.time.format("A")}</div>
        <div className="date">{this.state.time.format("dd.MM.DD")}</div>
      </div>
    );
  }
}
