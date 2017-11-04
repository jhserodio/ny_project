import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className="np-info">
        {this.props.children}
      </div>
    );
  }
}
