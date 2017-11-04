import React, { Component } from 'react';

export default class SizeBottom2 extends Component {

  render() {
    return (
      <div>
        <div className="size_model">
          <h2 className="title-base">
            1º passo / <br />
            medidas
          </h2>
          <div className="_content _bottom-fem">
            <div className="_image">
              <img src="public/img/size-bottom2.png" alt="" />
            </div>
            <ul className="_menu _half">
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
            </ul>
          </div>
        </div>

        <h2 className="title-base">
          2º passo / <br />
          encontre o tamanho certo
        </h2>
        <table className="size_table _bottom">
          <thead>
            <tr>
              <th>

                Medidas
                <br />
                em cm
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
            <tr className="_title">
              <td colSpan="3">tamanhos numericos</td>
            </tr>
            <tr>
              <td>36</td>
              <td>82 - 89</td>
              <td>90 - 98</td>
            </tr>
            <tr>
              <td>38</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>40</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>42</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>44</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>46</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr className="_title">
              <td colSpan="3">
                tamanhos nominais
                <small>
                   &nbsp; (peças com ajustes de cordão e/ou elástico na cintura)
                </small>
              </td>
            </tr>
            <tr>
              <td>p</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>m</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
            <tr>
              <td>g</td>
              <td>82-89</td>
              <td>90-98</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
