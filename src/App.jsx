import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import MainContainer from './components/MainContainer';
class App extends Component {
  constructor() {
    super();
    this.showLeftSidebar = this.showLeftSidebar.bind(this);
    this.showRightSidebar = this.showRightSidebar.bind(this);
    this.closeLeft = this.closeLeft.bind(this);
    this.closeRight = this.closeRight.bind(this);
  }
  state = {
    showLeft: false,
    showRight: false
  }
  showLeftSidebar() {
    this.setState({ showLeft: true});
  }
  closeLeft() {
    this.setState({ showLeft: false});
  }
  showRightSidebar() {
    this.setState({ showRight: true});
  }
  closeRight() {
    this.setState({ showRight: false});
  }
  render() {
    const { showLeft, showRight } = this.state;
    return (
      <Router>
        <div>
          <Navbar showLeft = {this.showLeftSidebar} showRight = {this.showRightSidebar} />
          <div className="appContainer">
            <LeftSidebar showLeft={showLeft} closeLeft={this.closeLeft} />
            <MainContainer />             
            <RightSidebar showRight={showRight} closeRight={this.closeRight}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
