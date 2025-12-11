// FILE: src/pages/Signup.jsx
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Use the state values
    console.log('Signup data:', { email, password });
    alert(`Signing up: ${email}`);
    // Add your signup logic here
  };

  return (
    <div className="page">
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}