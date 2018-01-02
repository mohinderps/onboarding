import React from 'react';
import './MaterialIcon.css';

const MaterialIcon = (props) => (
  <i className={"material-icons" + (props.hasPointer ? " cursor-pointer" : "")} onClick={() => props.click()}>{props.name}</i>
);

export default MaterialIcon;
