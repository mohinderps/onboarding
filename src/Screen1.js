import React, {Component} from 'react';

class Screen1 extends Component {
  render() {
    return (
      <div className="screen center" data-currentscreen="1">
        <i className="material-icons onboarding-icon">chat</i>
        <div>
          <span className="onboarding-message">The first step of onboarding, that is a thing.</span>
        </div>
      </div>
    )
  }
}

export default Screen1;
