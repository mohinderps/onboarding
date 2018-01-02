import React from 'react';
import './MaterialIcon.css';

const MaterialIcon = (props) => (
  <i className={"material-icons" + (props.hasPointer ? " cursor-pointer" : "")}>{props.name}</i>
);

export default MaterialIcon;
