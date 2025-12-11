// FILE: src/pages/Login.jsx
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Actually use the email and password state
    console.log('Login attempt:', { email, password });
    // Add your login logic here
    alert(`Logging in with: ${email}`);
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <input 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}