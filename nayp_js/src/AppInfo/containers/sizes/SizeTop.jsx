import React, { Component } from 'react';

export default class SizeTop extends Component {
  render() {
    return (
      <div>
        <div className="size_model">
          <h2 className="title-base">
            1º passo / <br />
            medidas
          </h2>
          <div className="_content _top-masc">
            <div className="_image">
              <img src="public/img/size-top1.png" alt="" />
            </div>
            <ul className="_menu">
              <li>
                <p>
                  <strong>
                    A. PEITO
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <span className="_marker _a">a</span>
              </li>
              <li>
                <p>
                  <strong>
                    B. ALTURA DO TRONCO
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <span className="_marker _b">b</span>
              </li>
              <li>
                <p>
                  <strong>
                    C. MEDIDA DO BRAÇO
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <span className="_marker _c">c</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="title-base">
          2º passo / <br />
          encontre o tamanho certo
        </h2>
        <table className="size_table">
          <thead>
            <tr>
              <th>

                Medidas
                <br />
                em cm
              </th>
              <th>
                a.<br />
                peito<br />
              </th>
              <th>
                b.<br />
                autura do<br />
                tronco
              </th>
              <th>
                c.<br />
                medida do<br />
                braço
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xp</td>
              <td>74 - 81</td>
              <td>82 - 89</td>
              <td>90 - 98</td>
            </tr>
            <tr>
              <td>p</td>
              <td>74-81</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>m</td>
              <td>74-81</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>g</td>
              <td>74-81</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>xg</td>
              <td>74-81</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>xxg</td>
              <td>74-81</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
