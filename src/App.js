import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">
    </div>
  </div>
)

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const InfluencerLogin = React.lazy(() => import('./pages/login/InfluencerLogin/InfluencerLogin'));
const InfluencerSignup = React.lazy(() => import('./pages/signup/InfluencerSignup'));

const BrandsLogin = React.lazy(() => import('./pages/login/BrandsLogin/BrandsLogin'));

const Page404 = React.lazy(() => import('./pages/page404/Page404'));
const Page500 = React.lazy(() => import('./pages/page500/Page500'));
class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/influencer/login" name="Login Page" render={props => <InfluencerLogin {...props}/>}/>
            <Route exact path="/influencer/signup" name="Signup Page" render={props => <InfluencerSignup {...props}/>}/>
            <Route exact path="/brands/login" name="Signup Page" render={props => <BrandsLogin {...props}/>}/>
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>}/>
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>}/>
            <Route path="/" name="Home" render={props => <TheLayout {...props}/>}/>
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}
export default App;
