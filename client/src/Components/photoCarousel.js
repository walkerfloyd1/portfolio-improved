import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/carousel.css";

import { Carousel } from 'react-responsive-carousel';

import Beaufort from '../images/beaufort.jpg';
import Cake from '../images/Cake.jpg';
import Expanse from '../images/expanse.jpg';
import Fripp from '../images/Fripp.jpg';
import Bridge from '../images/Downtown-Bridge-yo.jpg';
import Nature from '../images/nature.jpg';
import Dock from '../images/newpoint.jpg';
import Sun from '../images/sunnyday.jpg';

export default class ControlledCarousel extends Component {
  render () {
    return (
      <Carousel showThumbs={true} style={{
        fontFamily: "Raleway, sans-serif",
      }}>
      <div class="photo">
          <img src={Beaufort} />
          <div class="overlay-pic">
              <p>McTeer Bridge</p>
              <br />
              <p>Beaufort, SC</p>
              <p>Canon 70D</p>
          </div>
      </div>
      <div class="photo">
          <img src={Cake} />
          <div class="overlay-pic">
              <p>Cake</p>
              <br />
              <p>Stanley, NC</p>
              <p>Canon 70D</p></div>
      </div>
      <div class="photo">
          <img src={Bridge} />
          <div class="overlay-pic">
              <p>South Carolina Summer</p>
              <br />
              <p>Beaufort, sc</p>
              <p>Canon 70D</p>
          </div>
      </div>
      <div class="photo">
          <img src={Expanse} />
          <div class="overlay-pic">
              <p>Sunny Day in Boston</p>
              <br />
              <p>Boston, MA</p>
              <p>Canon 70D</p>
              </div>
      </div>
      <div class="photo">
          <img src={Fripp} />
          <div class="overlay-pic">
              <p>Stormy Day at Fripp Island</p>
              <br />
              <p>Fripp Island, SC</p>
              <p>Canon 70D</p></div>
      </div>
      <div class="photo">
          <img src={Nature} />
          <div class="overlay-pic">
              <p>Home</p>
              <br />
              <p>Beaufort, SC</p>
              <p>Canon 70D</p>
          </div>
      </div>
      <div class="photo">
          <img src={Dock} />
          <div class="overlay-pic">Dock at Sunset</div>
      </div>
      <div class="photo">
          <img src={Sun} />
          <div class="overlay-pic">Sunny Day in Boston</div>
      </div>
    </Carousel>
    )
  }
}