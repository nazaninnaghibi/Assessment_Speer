import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Images from './pages/Images';
import Songs from './pages/Songs';
import Pricing from './pages/Pricing';
import Payments from './pages/Payments';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <Switch>
             <Route path="/" component={Songs} exact/>
             <Route path="/images" component={Images} />
             <Route path="/pricing" component={Pricing} />
             <Route path="/payments" component={Payments} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
