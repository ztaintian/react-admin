import { HashRouter, Route, Switch } from 'react-router-dom'
// import React, { Component, lazy, Suspense } from 'react';
import React, { Component, Suspense } from 'react';

// const Home = lazy(() => import('../views/Home'));
import Home from '../views/Home';
import News from '../views/News';
import ControlPanel from '../views/ControlPanel';
import Regs from '../views/Regs';
import Web from '../views/Web';
// import Sign from '../views/Sign';

class Routers extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/ControlPanel" component={ControlPanel} />
            <Route exact path="/regs" component={Regs} />
            <Route exact path="/web" component={Web} />
            {/* <Route exact path="/sign" component={Sign} /> */}
          </Switch>
        </Suspense>
      </HashRouter>
    );
  }
}

export default Routers;