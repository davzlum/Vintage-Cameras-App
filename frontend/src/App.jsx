import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import CamerasList from './components/cameras/CamerasList';
import CameraDetail from './components/cameras/CameraDetail';
import Header from './components/common/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Cart from './components/Cart';
import configureStore from './redux/store';
import './App.css';
import Favorites from './components/Favorites';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/:section" component={CamerasList} />
          <Route exact path="/:section/:cameraId" component={CameraDetail} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
