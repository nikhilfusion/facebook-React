import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import { FaServer } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerBandMobile">
          <a className="iconContainer" onClick={this.props.showLeft}><FaServer className="icon"  /></a>
          <a className="iconContainer" href="/"><FaIdCard className="icon" /></a>
          <a className="iconContainer" href="/about"><FaUsers className="icon" /></a>
          <a className="iconContainer" href="/news"><FaNewspaper className="icon" /></a>
          <a className="iconContainer" onClick={this.props.showRight}><FaServer className="icon" /></a>
        </div>
        <div className="headerBandWeb">
          <Image src="assets/logo.png" className="headerLogo" />
          <div className="pull-right">
            <ul className="list-inline navMain">
              <li><a href="/" className="navItem">Home</a></li>
              <li><a href="/about" className="navItem">About</a></li>
              <li><a href="/news" className="navItem">News</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
