import React, {Component} from 'react';
import MaterialIcon from './MaterialIcon';
import './MainApp.css';

class MainApp extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <span>Content</span>
        </div>
        <div className="footer">
          <span>
            <MaterialIcon name="navigate_before" hasPointer/>
          </span>
          <span>
            <MaterialIcon name="radio_button_unchecked" hasPointer/>
            <MaterialIcon name="radio_button_unchecked" hasPointer/>
            <MaterialIcon name="radio_button_unchecked" hasPointer/>
          </span>
          <span>
            <MaterialIcon name="navigate_next" hasPointer/>
          </span>
        </div>
      </div>
    )
  }
}

export default MainApp;
