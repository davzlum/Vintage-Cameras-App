import React from 'react';
import { Provider } from 'react-redux';
// import CamerasList from './components/cameras/CamerasList';
import Header from './components/common/Header';
import Dashboard from './components/Dashboard';
import configureStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Dashboard />
    </Provider>
  );
}

export default App;
