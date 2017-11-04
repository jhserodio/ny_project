import React, { Component } from 'react';

// data
import { faq } from './mock';

import QuestionList from '../../components/questions/QuestionList';


export default class Faq extends Component {

  constructor () {
    super();

    this.state = {
      questions: faq.load()
    }
  }

  render() {
    return (
      <div className="_content">
        <h1 className="title-base">faq / perguntas frequentes</h1>
        <p>iste sed, dolores. Illo molestiae vitae repellat laudantium, rerum aut!</p>

        <QuestionList list={this.state.questions} />

      </div>

    );
  }
}
