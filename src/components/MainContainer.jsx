import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import News from './News';
import './MainContainer.css';

export default class mainContainer extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
      </div>
    )
  }
}