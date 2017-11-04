import React from 'react';
import ReactDOM from 'react-dom';

import { RouteConfig } from './app/config';
import { App } from './app/app.jsx';

ReactDOM.render(
  <RouteConfig main={App} />,
  document.getElementById('app')
);
