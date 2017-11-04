import React, { Component } from 'react';

export default class Question extends Component {

  constructor (props) {
    super(props);

    this.state = {
      visibility: this.props.visibility
    }
  }

  toggle() {
    this.setState({
      visibility: !this.state.visibility
    });
  }

  render() {

    let visibility = this.state.visibility ? "_active " : "";

    return (

          <div className={ visibility + " question"}
               onClick={this.toggle.bind(this)}>
            <div className="_header">
              <span>
                {this.props.title}
              </span>
              <button className="btn-icon">
                v
              </button>
            </div>
            <div className="_main">
              {this.props.content.map( item =>
                <p className="_paragraph">
                  {item}
                </p>
              )}
            </div>
          </div>

    );
  }
}
