import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home';
import NotFound from '../NotFound';
import Watches from '../Pages/Watches'
import Iphones from '../Pages/Iphones'

const App = () => (
  <Router>
    <Switch>
        <Route exact path={"/"} component={Home} />    
        <Route path={"/watches"} component={Watches} />
        <Route path={"/iphones"} component={Iphones} />
        <Route path={"/notFound"} component={NotFound} />
    </Switch>
  </Router>
);

export default App;

