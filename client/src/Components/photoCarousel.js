import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/carousel.css";

import { Carousel } from 'react-responsive-carousel';

import Beaufort from '../images/photography/beaufort.jpg';
import Cake from '../images/photography/Cake.jpg';
import Bridge from '../images/photography/Downtown-Bridge-yo.jpg';
import Expanse from '../images/photography/expanse.jpg';
import Fripp from '../images/photography/Fripp.jpg';
import Houses from '../images/photography/houses.jpg';
import Newpoint from '../images/photography/IMG_0140-1.jpg';
import Nature from '../images/photography/nature.jpg';
import Dock from '../images/photography/newpoint.jpg';
import Sun from '../images/photography/sunnyday.jpg';

export default class  ControlledCarousel extends Component {
  render () {
    return (
      <Carousel showThumbs={false} style={{
        fontFamily: "Raleway, sans-serif",
      }}>
      <div class="pic">
          <img src={Beaufort} />
          <div class="overlay">
              <p>McTeer Bridge</p>
              <br></br>
              <p>Beaufort, SC</p>
          </div>
      </div>
      <div class="pic">
          <img src={Cake} />
          <div class="overlay">Cake</div>
      </div>
      <div class="pic">
          <img src={Bridge} />
          <div class="overlay">
              <p>South Carolina Summer</p>
          </div>
      </div>
      <div class="pic">
          <img src={Expanse} />
          <div class="overlay">Sunny Day in Boston</div>
      </div>
      <div class="pic">
          <img src={Fripp} />
          <div class="overlay">Stormy Day at Fripp Island</div>
      </div>
      <div class="pic">
          <img src={Houses} />
          <div class="overlay">Summer</div>
      </div>
      <div class="pic">
          <img src={Newpoint} />
          <div class="overlay">Sunset in South Carolina</div>
      </div>
      <div class="pic">
          <img src={Nature} />
          <div class="overlay">Home</div>
      </div>
      <div class="pic">
          <img src={Dock} />
          <div class="overlay">Dock at Sunset</div>
      </div>
      <div class="pic">
          <img src={Sun} />
          <div class="overlay">Sunny Day in Boston</div>
      </div>
    </Carousel>
    )
  }
}