import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Admin Portal</div>
      <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
      <div className={`nav-links ${open ? 'show' : ''}`}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/training">Training</Link>
        <Link to="/home">Home</Link>
        <button onClick={toggleTheme}>{darkMode ? '🌞' : '🌙'}</button>
      </div>
    </nav>
  );
}