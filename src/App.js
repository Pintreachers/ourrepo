import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import {SignUpPage} from './components/SignUpPage'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <div>
      <Route path = '/signup'>
        <SignUpPage />
      </Route>
      <Route exact path = '/'>
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
