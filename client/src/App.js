import React, { useState } from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
const App = () => {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    
    <div>
     
    <Header />
    <Main />
    </div>
  );
}

export default App;