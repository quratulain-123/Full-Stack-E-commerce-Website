import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import {app} from './firebase.config.jsx'
import './index.css'
import { store , persistor } from './redux/store.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} app={app}>
    <PersistGate Loading={"loading"} persistor={persistor}>
      <App />
      </PersistGate>
    
  </Provider>
);

