// FILE: src/pages/Plans.jsx
import { useState } from 'react';

export default function Plans() {
  const [mobile, setMobile] = useState('');
  const [msg, setMsg] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { id: 1, name: 'Basic', price: 199 },
    { id: 2, name: 'Value', price: 399 },
    { id: 3, name: 'Unlimited', price: 599 },
  ];

  const handleRecharge = () => {
    if (!mobile) {
      setMsg('Please enter mobile number');
      return;
    }
    if (!selectedPlan) {
      setMsg('Please select a plan');
      return;
    }
    
    // Use the mobile state and selected plan
    const plan = plans.find(p => p.id === selectedPlan);
    setMsg(`Recharge Successful for ${mobile}: ${plan.name} - ₹${plan.price}`);
  };

  return (
    <div className="page">
      <h2>Plans</h2>
      {plans.map(p => (
        <div key={p.id}>
          <input 
            type="radio" 
            name="plan" 
            onChange={() => setSelectedPlan(p.id)} 
          />
          {p.name} - ₹{p.price}
        </div>
      ))}
      <input 
        placeholder="Mobile" 
        value={mobile}
        onChange={(e) => setMobile(e.target.value)} 
      />
      <button onClick={handleRecharge}>Recharge</button>
      <p>{msg}</p>
    </div>
  );
}