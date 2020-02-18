import React, { Component } from "react";
import "./../../reset.css";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    };
  }

  toggleMenuFunc() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  render() {
    return (
      <div className="headDiv">
        <header>
          <h1 className="title">Start Bootstrap</h1>
          <nav className="navigation">
            <a href="#" className="navTitles">SERVICES</a>
            <a href="#" className="navTitles"> PORTFOLIO</a>
            <a href="#" className="navTitles">ABOUT</a>
            <a href="#" className="navTitles">TEAM </a>
            <a href="#" className="navTitles">CONTACT</a>
          </nav>
          <div className="buttondiv">
          <button className="menuButton">
            <h1>MENU</h1>
            <img
              className="hamburger"
              alt="hamburger"
              src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
              onClick={() => this.toggleMenuFunc()}
            />
          </button>
          </div>
        </header>
        <nav
          className={
            this.state.toggleMenu ? "mobile-menu-show" : "mobile-menu-hide"}>
          <a href="#" className="navTitles">SERVICES</a>
          <a href="#" className="navTitles">PORTFOLIO</a>
          <a href="#" className="navTitles">ABOUT</a>
          <a href="#" className="navTitles">TEAM</a>
          <a href="#" className="navTitles">CONTACT</a>
        </nav>
      </div>
    );
  }
}

export default Header;
