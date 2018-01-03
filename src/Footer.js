import React from 'react';
import './Footer.css';

const Footer = (props) => (
  <div className="footer">
    <div onClick={props.previousScreen}>
      <i className="material-icons" id="previous-icon" data-currentscreen={props.currentScreen}>navigate_before</i>
    </div>
    <div onClick={props.nextScreen}>
      <i className="material-icons" id="next-icon" data-currentscreen={props.currentScreen}>navigate_next</i>
    </div>
  </div>
);

export default Footer;
