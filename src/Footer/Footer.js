import React from 'react';
import './Footer.css';

const Footer = (props) => (
  <div className="footer">
    <div>
      <i className="material-icons previous-icon cursor-default" data-currentscreen={props.currentScreen} onClick={props.previousScreen}>navigate_before</i>
    </div>
    <div>
      <i className="material-icons next-icon cursor-default" data-currentscreen={props.currentScreen}  onClick={props.nextScreen}>navigate_next</i>
    </div>
  </div>
);

export default Footer;
