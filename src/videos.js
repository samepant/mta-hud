import React from 'react';

export default class videos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pinkCount: '0001',
      arkCount: '0001',
      roryCount: '0001',
      intervalid: null,
    };
  }

  componentDidMount() {
    const intervalid = setInterval(this.setFrame, 5000);
  }

  setFrame = () => {
    const pinkMax = 5804;
    const arkMax = 6113;
    const roryMax = 4678;

    this.setState((state, props) => {
      let newPink, newArk, newRory;
      const currentPink = parseInt(state.pinkCount);
      const currentArk = parseInt(state.arkCount);
      const currentRory = parseInt(state.roryCount);

      newPink = currentPink + 1;
      newArk = currentArk + 1;
      newRory = currentRory + 1;

      if (currentPink >= pinkMax) {
        newPink = 1;
      }
      if (currentArk >= arkMax) {
        newArk = 1;
      }
      if (currentRory >= roryMax) {
        newRory = 1;
      }

      newPink = newPink.toString().padStart(4, '0');
      newArk = newArk.toString().padStart(4, '0');
      newRory = newRory.toString().padStart(4, '0');

      return {
        pinkCount: newPink,
        arkCount: newArk,
        roryCount: newRory,
      };
    });
  };

  render() {
    return (
      <div>
        <div className="video vid1">
          <img src={`videos/pink/${this.state.pinkCount}.jpg`} />
        </div>
        <div className="video vid2">
          <img src={`videos/ark/${this.state.arkCount}.jpg`} />
        </div>
        <div className="video vid3">
          <img src={`videos/rory/${this.state.roryCount}.jpg`} />
        </div>
      </div>
    );
  }
}
