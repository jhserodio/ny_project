import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Navegation extends Component {

  render () {
    return (
      <div className="megamenu app-navegation">
        <div className="container">
          <ul className="menu menu-info">
            <li><IndexLink to="/">sobre nós</IndexLink></li>
            <li><Link to="/help">atendimento</Link></li>
            <li><Link to="/order">status do pedido</Link></li>
            <li><Link to="/sizes">guia de tamanhos</Link></li>
            <li><Link to="/politic">termos e política</Link></li>
          </ul>
        </div>
      </div>
    );
  }

}
