import React, {Component} from 'react';

class Screen1 extends Component {
  render() {
    return (
      <div className="screen center" data-currentscreen="3">
        <i className="material-icons onboarding-icon">settings</i>
        <div>
          <span className="onboarding-message">Final step of onboarding. Weeee, carousels!</span>
        </div>
      </div>
    )
  }
}

export default Screen1;
