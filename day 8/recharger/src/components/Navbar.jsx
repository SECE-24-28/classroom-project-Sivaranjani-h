import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();  // ← Now works properly
  
  return (
    <nav className="nav">
      <div>
        <Link to="/">Home</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/guess">Guess Game</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/counter">Counter</Link>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </nav>
  );
}