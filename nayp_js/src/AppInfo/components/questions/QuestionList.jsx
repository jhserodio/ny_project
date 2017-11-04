import React, { Component } from 'react';

import Question from './Question';

export default class QuestionList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: this.props.list
    };

    for ( let item of this.state.content ) {
      item.visibility = false;
    }
  }



  render() {
    return (
      <div className="questions">
        {this.state.content.map( item =>
          <Question title={item.head}
                    content={item.main}
                    visibility={item.visibility}/>
        )}
      </div>
    );
  }

}