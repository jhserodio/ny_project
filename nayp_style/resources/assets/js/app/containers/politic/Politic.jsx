import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Politic extends Component {
  render () {
    return (
      <div className="info-np">
        <div className="container">
          <nav className="nav_tab _half">
            <ul className="reset">
              <li><IndexLink to="/politic">Termos de uso</IndexLink></li>
              <li><Link to="/privacy">Política de privacidade</Link></li>
            </ul>
          </nav>
          {this.props.children}
        </div>
      </div>
    );
  }
}
