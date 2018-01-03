import React, {Component} from 'react';

class Screen1 extends Component {
  render() {
    return (
      <div className="screen center" data-currentscreen="2">
        <i className="material-icons onboarding-icon">event</i>
        <div>
          <span className="onboarding-message">Second step of onboarding, showing the things.</span>
        </div>
      </div>
    )
  }
}

export default Screen1;
