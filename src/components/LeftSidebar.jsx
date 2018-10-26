import React, { Component } from "react";

import './CustomSidebar.css';

export default class LeftSidebar extends Component {
  constructor() {
    super();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  state= {
    isWeb: false
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    window.addEventListener("resize", this.resize.bind(this));
    this.setState({isWeb: window.innerWidth >= 480});
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  resize() {
    this.setState({isWeb: window.innerWidth >= 480});
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.closeLeft();
    }
  }

  render() {
    const { isWeb } = this.state;
    const { showLeft } = this.props;
    return (
      <div ref={this.setWrapperRef} className={`leftWrapper ${(isWeb || showLeft) ? 'visibleDiv' : 'hideDiv'}`}>
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Nikhil</h3>
          </div>
          <ul className="list-unstyled components">
            <li className="active sidebarSub">
              <a href="/" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
            </li>
            <li className="sidebarSub">
              <a href="/about">About</a>
            </li>
            <li className="sidebarSub">
              <a href="/" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
            </li>
            <li className="sidebarSub">
              <a href="/news">Portfolio</a>
            </li>
            <li className="sidebarSub">
              <a href="/about">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

