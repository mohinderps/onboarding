import React from 'react';
import './Slides.css';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';


const Slides = (props) => {
  return (
    <div className="slides">
      <div className="slides-wrapper" data-currentscreen={props.currentScreen}>
        <Screen1 />
        <Screen2 />
        <Screen3 />
      </div>
    </div>
  )
}

export default Slides;
