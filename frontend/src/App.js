// In your App.js

import React, { useState } from 'react';
import Login from './components/Login';
import { getToken, removeToken } from './services/auth';
import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [token, setToken] = useState(getToken());

  const handleLogin = () => {
    setToken(getToken());
  };

  const handleLogout = () => {
    removeToken();
    setToken(null);
  };

  return (
      <div className="container">
        <h1 className="mt-3 mb-5 text-center">Blog Panel</h1>
        {token ? (
          <div>
            <button className="btn btn-danger mb-5" onClick={handleLogout}>Logout</button>
            <ArticleList token={token} />
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    );
  };
  
export default App;