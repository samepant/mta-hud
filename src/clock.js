import moment from "moment";
import React from "react";

export default class clock extends React.Component {
  state = {
    time: moment(),
    width: 0,
    height: 0
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
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
        <div className="dims">
          width: {this.state.width}, height: {this.state.height}
        </div>
      </div>
    );
  }
}
