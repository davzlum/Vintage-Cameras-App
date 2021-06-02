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
import configureStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/cameras" component={CamerasList} />
          <Route exact path="/cameras/:cameraId" component={CameraDetail} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
