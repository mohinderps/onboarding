import React from 'react';
import './MaterialIcon.css';

const MaterialIcon = (props) => {
  return (
    <i className={"material-icons navigation-icon" + (props.hasPointer ? " cursor-pointer" : "")} data-currentscreen={props.currentScreen}>{props.name}</i>
  );
}

export default MaterialIcon;
