import React from 'react';
import { Provider } from 'react-redux';
import CamerasList from './components/cameras/CamerasList';
import configureStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <h1>Hola</h1>
      <CamerasList />
    </Provider>
  );
}

export default App;
