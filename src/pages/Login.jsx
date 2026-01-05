import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api/axiosConfig';
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState('emilys'); 
  const [password, setPassword] = useState('emilyspass');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/login', { username, password });
      if (res.data.accessToken) {
        login(res.data, res.data.accessToken);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Member Login</h2>
        {error && <div className="error-msg">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;