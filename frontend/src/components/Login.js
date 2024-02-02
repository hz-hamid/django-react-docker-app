import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { setToken } from '../services/auth';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginUser(username, password);
      setToken(response.token);
      onLogin();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2 className='text-center'>Login</h2>
      <input
        type="text"
        placeholder="Username" className='form-control mb-3 text-center'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password" className='form-control text-center'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='text-center mt-5'>
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;