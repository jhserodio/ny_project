import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Info from '../containers/info/Info.jsx';
import Faq from '../containers/faq/Faq.jsx';
import Help from '../containers/help/Help.jsx';
import Switch from '../containers/switch/Switch.jsx';
import Order from '../containers/order/Order.jsx';
import Sizes from '../containers/sizes/Sizes.jsx';
import SizeTop from '../containers/sizes/SizeTop.jsx';
import SizeTop2 from '../containers/sizes/SizeTop2.jsx';
import SizeBottom from '../containers/sizes/SizeBottom.jsx';
import SizeBottom2 from '../containers/sizes/SizeBottom2.jsx';
import Contact from '../containers/contact/Contact.jsx';
import Politic from '../containers/politic/Politic.jsx';
import Terms   from '../containers/terms/Terms.jsx';
import Privacy from '../containers/privacy/Privacy.jsx';

export class RouteConfig extends Component {
  render() {
    return  (
      <Router history={hashHistory}>
        <Route path="/" component={this.props.main} >
          <IndexRoute index="1" component={Info} />
          <Route index="2" path="/help" component={Help}>
            <IndexRoute component={Faq} />
            <Route path="/switch" component={Switch} />
            <Route path="/contact" component={Contact} />
          </Route>
          <Route index="3" path="/order" component={Order} />
          <Route index="4" path="/sizes" component={Sizes} >
            <IndexRoute component={SizeTop} />
            <Route path="/top2" component={SizeTop2} />
            <Route path="/bottom" component={SizeBottom} />
            <Route path="/bottom2" component={SizeBottom2} />
          </Route>
          <Route index="5"path="/politic" component={Politic}>
            <IndexRoute component={Terms} />
            <Route path="/privacy" component={Privacy} />
          </Route>
        </Route>
      </Router>
    );
  }
}
