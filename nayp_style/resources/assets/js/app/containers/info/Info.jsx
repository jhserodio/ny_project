import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <div className="about-np">
        <div className="banner">
          <div className="slide-item _active">
            <div className="slide-info">
              <h2>
                pagina about - rise of the pin
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque feugiat lacus a ipsum tristique tincidunt.
              </p>
            </div>
            <div className="flex-image">
              <video autoPlay muted>
                <source src="public/video/nayp.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
