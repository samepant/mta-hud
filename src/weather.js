import axios from 'axios';
import React from 'react';

export default class weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 0,
      description: '',
      apiInterval: null,
    };
  }

  componentDidMount() {
    this.getWeather();

    const apiInterval = setTimeout(() => {
      this.getWeather();
    }, 1000 * 60 * 10); // every two minutes

    this.setState({ apiInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.apiInterval);
  }

  getWeather = () => {
    console.log('getting weather');
    axios.get('/weather').then((res) => {
      const data = res.data.data[0] || null;

      if (data) {
        this.setState({
          temp: Math.floor(data.temp * 1.8 + 32),
          description: data.weather.description,
        });
      }
    });
  };

  render() {
    return (
      <div className="weather">
        <div className="temp">{this.state.temp}</div>
        <div className="description">{this.state.description}</div>
      </div>
    );
  }
}
