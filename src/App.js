import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scrollchor from 'react-scrollchor';
import { FaBars } from 'react-icons/fa/';
import { FaTwitter } from 'react-icons/fa/';
import { FaFacebook } from 'react-icons/fa/';
import { FaInstagram } from 'react-icons/fa/';
import { FaPhone } from 'react-icons/fa/';
import { FaEnvelope } from 'react-icons/fa/';


class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="flex-nav">
          <ul>
            <li><Scrollchor to="#about-us" className="nav-link">About us</Scrollchor></li>
            <li><Scrollchor to="#menus" className="nav-link">Menus</Scrollchor></li>
            <li><Scrollchor to="#contact-us" className="nav-link">Contact Us</Scrollchor></li>
            <li><Scrollchor to="#hours" className="nav-link">Hours</Scrollchor></li>
            <li><Scrollchor to="#location" className="nav-link">Getting Here</Scrollchor></li>
            <li><Scrollchor to="#gallery" className="nav-link">Gallery</Scrollchor></li>
            <li className="social"><FaInstagram/></li>
            <li className="social"><FaTwitter /></li>
            <li className="social"><FaInstagram/></li>
          </ul>
        </nav> 
      </div> 
    );
  }
}

class FrontPage extends Component {
  render() {
    return (
      <div id="front-page" className="parallaxgroup">
        <div className="parallax- parallax---base">
          <h1 className="dan-logo">Dan O'Connell Hotel</h1>
        </div>
        <div className="parallax- parallax-back">
          <Nav />
        </div>
      </div>
    );
  }
}

class AboutUs extends Component {
  render() {
    return(
      <div id="about-us" className="parallaxgroup">
        <div className="parallax- parallax---base">
          <div className="title">Website Coming Soon</div>
        </div>
      </div>
    )
  }
}

class Menus extends Component {
  render() {
    return (
      <div id="menus" className="parallaxgroup">
        <div className="parallax- parallax---base">
          <div className="title">
            <button>Download the Menu</button>
            <button>Download the Winelist</button>
          </div>
        </div>
        <div className="parallax- parallax-back">
          <div className="title"></div>
        </div>
      </div>
    );
  }
}

class ContactUs extends Component {
  render() {
    return (
      <div id="location" className="parallaxgroup">
        <div className="parallax- parallax---base">
          <div className="title location">
            <div className="contact contact-details">
              <h2>Get in touch:</h2>
              <FaPhone />
              <FaEnvelope />
            </div>
            <div className="contact socials">
              <h2>Follow Us:</h2>
              <FaTwitter />
              <FaInstagram />
              <FaFacebook />
            </div>
            <div className="contact hours">
              <h2>Hours:</h2>
              <ul>
                <li>Mon - Thurs: 3pm - 11pm</li>
                <li>Fri - Sat: 12pm - 1am</li>
                <li>Sun: 12pm - 11pm</li>
              </ul>
            </div>
            <div className="contact map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.872877249186!2d144.9712621508215!3d-37.79301884053015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64327f74fffeb%3A0x26962969349d0602!2sDan+O&#39;Connell+Hotel!5e0!3m2!1sen!2sau!4v1530769367534"></iframe>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="parallax">
          <FrontPage />
          <AboutUs />
          <Menus />
          <div id="group5" className="parallaxgroup">
            <div className="parallax- parallax---base">
              <div className="title">Website Coming Soon</div>
            </div>
          </div>
  
          <div id="group6" className="parallaxgroup">
            <div className="parallax- parallax-back">
              {/*<div class="title"></div>*/}
            </div>
            <div className="parallax- parallax---base">
              <div className="title">Website Coming Soon</div>
            </div>
          </div>
          <div className="title">Website Coming Soon</div>
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default App;
