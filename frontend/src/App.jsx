import React from 'react';
import { Provider } from 'react-redux';
import CamerasList from './components/cameras/CamerasList';
import Header from './components/common/Header';
import configureStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <CamerasList />
    </Provider>
  );
}

export default App;
