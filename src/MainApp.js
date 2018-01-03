import React, {Component} from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Slides from './Slides';
import Footer from './Footer';
import './MainApp.css';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 1
    };
    this.nextScreen = this.nextScreen.bind(this);
    this.previousScreen = this.previousScreen.bind(this);
  }

  nextScreen() {
    this.setState({
      screen: this.state.screen + 1
    })
  }

  previousScreen() {
    this.setState({
      screen: this.state.screen - 1
    })
  }

  render() {
    return (
      <div className="container">
        <div className="background" data-currentscreen={this.state.screen}></div>
        <Slides currentScreen={this.state.screen}/>
        <Footer nextScreen={this.nextScreen} previousScreen={this.previousScreen} currentScreen={this.state.screen}/>
      </div>
    )
  }
}

export default MainApp;
