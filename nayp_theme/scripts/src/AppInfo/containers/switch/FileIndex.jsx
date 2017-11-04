import React, { Component } from 'react';

export default class FileIndex extends Component {

  constructor(){
    super();
    this.state = { file: "_hide"}
  }

  callFile(e) {
    e.preventDefault();
    if (this.state.file === "_hide") {
      this.setState({file: "_show"});
    } else {
      this.setState({file: "_hide"});
    }
  }

  render() {
    return (
      <div className="form_file">
        <div className="file_descript">
          se julga necessário, anexe uma imagem para ajudar
          a ilustrar o motivo da troca ou devolução do seu produto
        </div>
        <div className="file_input">
          <button onClick={this.callFile.bind(this)} className="btn-other">
            o anexar arquivo
          </button>
          <div className={"_box " + this.state.file} >
            <input type="file"></input>
          </div>
        </div>
      </div>
    );
  }
}
