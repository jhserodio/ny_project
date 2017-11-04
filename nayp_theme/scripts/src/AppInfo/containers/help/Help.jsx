import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Help extends Component {
  render() {
    return (
      <div className="info-np">
        <div className="container">
          <nav className="nav_tab _tri">
            <ul className="reset">
              <li><IndexLink to="/help">Faq </IndexLink></li>
              <li><Link to="/switch">trocas e devoluções</Link></li>
              <li><Link to="/contact">contato</Link></li>
            </ul>
          </nav>

          {this.props.children}

        </div>
      </div>
    );
  }
}
