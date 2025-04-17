import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user.username === 'admin' && user.password === '1234') {
      localStorage.setItem('isAuthenticated', true);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <input placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}