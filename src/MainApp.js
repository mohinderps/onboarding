import React, {Component} from 'react';
import MaterialIcon from './MaterialIcon';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
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

  setScreen(n) {
    debugger
    this.setState({
      screen: n
    })
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          {this.state.screen === 1 ? <Screen1 /> : ""}
          {this.state.screen === 2 ? <Screen2 /> : ""}
          {this.state.screen === 3 ? <Screen3 /> : ""}
        </div>
        <div className="footer">
          <span>
            {this.state.screen !== 1 ? <MaterialIcon name="navigate_before" hasPointer click={this.previousScreen}/> : ""}
          </span>
          <span>
            <MaterialIcon name="radio_button_unchecked" hasPointer click={() => this.setScreen(1)}/>
            <MaterialIcon name="radio_button_unchecked" hasPointer click={() => this.setScreen(2)}/>
            <MaterialIcon name="radio_button_unchecked" hasPointer click={() => this.setScreen(3)}/>
          </span>
          <span>
            {this.state.screen !== 3? <MaterialIcon name="navigate_next" hasPointer click={this.nextScreen}/>: ""}
          </span>
        </div>
      </div>
    )
  }
}

export default MainApp;
