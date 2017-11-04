import React, { Component } from 'react';

import Main from './containers/main/Main.jsx';
import Navegation from './components/navegation/Navegation.jsx';

export class App extends Component {
  render() {
    return (
      <div>
        <Navegation></Navegation>
        <Main>
          {this.props.children}
        </Main>
      </div>
    );
  }
}
