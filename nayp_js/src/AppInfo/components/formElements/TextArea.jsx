import React, { Component } from 'react';

export default class TextArea extends Component {

  static defaultProps = {
    isRequired: false
  }

  state = {
      value: "",
      label: this.props.isRequired ? `${this.props.label} *` : this.props.label,
      minLength: this.props.minLength,
      maxLength: this.props.maxLength,
      grid: this.props.grid,
      validate: "",
      isRequired: this.props.isRequired
  }

  validate(event) {
    let targetValue = event.target.value;

      if (targetValue) {
        // mail type verify
        if (targetValue.length < this.state.minLength) {
          this.setState({
            validate: "_error",
            validateMessage: `o campo deve conter no minimo ${this.state.minLength} caracteres`
          });
          // max char validate
        } else if (targetValue.length > this.state.maxLength) {
          this.setState({
            validate: "_error",
            validateMessage: `o campo deve conter no maximo ${this.state.maxLength} caracteres`
          });
          // clear validate
        } else {
          this.setState({validate: ""});
        }
      } else {
        // required validate
        if(this.state.isRequired) {
          this.setState({
            validate: "_error",
            validateMessage: "campo obrigatório"
          });
        }
      }

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    
    var formClass = `form_box ${this.state.grid} ${this.state.validate}`;

    return (
      <div className={formClass}>
        <label>{this.state.label}</label>
        <span className="alert-error">
          {this.state.validateMessage}
        </span>
        <textarea type={this.props.type}
                  name={this.props.name}
                  value={this.state.value}
                  onChange={::this.handleChange}
                  onBlur={::this.validate}>
        </textarea>
      </div>
    );
  };


}
