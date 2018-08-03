import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class ContactUs extends Component {
//   render() {
//     return (
//       <div className="contact-div">
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.872877249186!2d144.9712621508215!3d-37.79301884053015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64327f74fffeb%3A0x26962969349d0602!2sDan+O&#39;Connell+Hotel!5e0!3m2!1sen!2sau!4v1530769367534"></iframe>
//       </div>

//       );
//   }
// }

class Location extends Component {
  render() {
    return(
            <div class="parallax- parallax---base">
              <div class="title location">Contact Us Layer
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.872877249186!2d144.9712621508215!3d-37.79301884053015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64327f74fffeb%3A0x26962969349d0602!2sDan+O&#39;Connell+Hotel!5e0!3m2!1sen!2sau!4v1530769367534"></iframe>
              </div>
            </div>      
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="parallax">
          <div id="group1" class="parallaxgroup">
            <div class="parallax- parallax---base">
              <img className="dan-logo" src="https://s3-ap-southeast-2.amazonaws.com/craftypint/crafty4/seller/Dan-logo-LARGE-171103-075155.png"/>
            </div>
            <div class="parallax- parallax-back">
            </div>
          </div>

          <div id="group3" class="parallaxgroup">

            <div class="parallax- parallax---base">
              <div class="title">Base Layer group 3</div>
            </div>
          </div>

          <div id="group4" class="parallaxgroup">
            <div class="parallax- parallax---base">
              <div class="title">Base Layer group 4</div>
            </div>
            <div class="parallax- parallax-back">
              {/*<div class="title">Background Layer 2</div>*/}
            </div>

          </div>
  
          <div id="group5" class="parallaxgroup">

            <div class="parallax- parallax---base">
              <div class="title">Base Layer group 5</div>
            </div>
          </div>
  
          <div id="group6" class="parallaxgroup">
            <div class="parallax- parallax-back">
              {/*<div class="title"></div>*/}
            </div>
            <div class="parallax- parallax---base">
              <div class="title">Base Layer group 6</div>
            </div>
          </div>
        
          <div id="group7" class="parallaxgroup">
            <Location/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
