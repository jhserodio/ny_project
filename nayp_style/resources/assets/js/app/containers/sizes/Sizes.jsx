import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Sizes extends Component {
  render() {
    return (
      <div className="info-np">
          <div className="container">
            <nav className="nav_tab">
              <ul className="reset">
                <li><IndexLink to="/sizes">men's top</IndexLink></li>
                <li><Link to="bottom">men's bottoms</Link></li>
                <li><Link to="/top2">women's top</Link></li>
                <li><Link to="/bottom2">women's bottom</Link></li>
              </ul>
            </nav>

            {this.props.children}

            <div>
              <div className="info-content">
                <p>
                  - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur fuga quisquam assumenda et est officia, quaerat illum eius,
                  ipsum quas iste corporis pariatur reiciendis distinctio repudiandae
                </p>
                <p>
                  - quaerat illum eius, ipsum quas iste corporis pariatur reiciendis
                   distinctio repudiandae voluptate odio voluptatibus neque.
                </p>
                <p>
                  - ing elit. Tenetur fuga quisquam assumenda et est officia, quaerat illum eius,
                  ipsum quas iste corporis pariatur reiciendis distinctio
                </p>
              </div>
              <h2 className="title-base">
                dúvidas?
              </h2>
              <small>
                quaerat illum eius, ipsum quas iste corporis pariatur reiciendis
                distinctio repudiandae voluptate odio voluptatibus neque.
              </small>
              <br />
              <br />
              <a href="#" className="reset">
                <button className="btn-full">
                  clique aqui e fale conosco
                </button>
              </a>
            </div>
          </div>
        </div>
    );
  }
}
