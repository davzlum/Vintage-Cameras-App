import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import CamerasList from './components/Products/ProductsList';
import CameraDetail from './components/Products/ProductDetail';
import Header from './components/common/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Cart from './components/Cart';
import configureStore from './redux/store';
import './App.css';
import Favorites from './components/Favorites';
import Register from './components/Register';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/:section" component={CamerasList} />
          <Route exact path="/:section/:productId" component={CameraDetail} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
