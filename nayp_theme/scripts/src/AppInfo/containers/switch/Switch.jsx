import React, { Component } from 'react';

import SwitchForm from './SwitchForm';
import QuestionList from '../../components/questions/QuestionList';

// data
import { switchTerms } from './mock';

export default class Switch extends Component {

  constructor () {
    super();

    this.state = {
      questions: switchTerms.load()
    }
  }

  render() {

    return (
      <div className="_content">
        <div>
          <h2 className="title-base">
            Politicas de trocas e devoluções
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <QuestionList list={this.state.questions}/>

        <br/>
        <br/>

        <SwitchForm />

      </div>
    );
  }
}
