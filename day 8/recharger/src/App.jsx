import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{
      padding: "15px 30px",
      background: "#106b82ff",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "24px" }}>📱</span>
        <h3 style={{ margin: 0 }}>Mobile Recharge</h3>
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/login" style={navLinkStyle}>Login</Link>
        <Link to="/signup" style={navLinkStyle}>Sign Up</Link>
        <Link to="/plans" style={navLinkStyle}>Recharge</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Mobile Recharge Portal</h1>
      <p>Welcome to mobile recharge service</p>
      <div style={{ marginTop: "30px", display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/signup" style={linkStyle}>Sign Up</Link>
        <Link to="/plans" style={linkStyle}>View Plans</Link>
      </div>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login attempted for: ${email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", padding: "30px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      <Link to="/" style={{ display: "block", marginTop: "20px", textAlign: "center" }}>← Back to Home</Link>
    </div>
  );
}

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for: ${formData.name}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", padding: "30px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          style={inputStyle}
          maxLength="10"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>
      <Link to="/" style={{ display: "block", marginTop: "20px", textAlign: "center" , }}>← Back to Home</Link>
    </div>
  );
}

function Plans() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const plans = [
    { id: 1, name: "Basic Plan", price: "₹199", validity: "28 days", data: "1GB/day" },
    { id: 2, name: "Pro Plan", price: "₹399", validity: "56 days", data: "2GB/day" },
    { id: 3, name: "Premium Plan", price: "₹799", validity: "84 days", data: "5GB/day" }
  ];

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
  };

  const handlePlanSelect = (plan) => {
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const handlePayment = () => {
    if (selectedPlan) {
      alert(
        `Recharge Successful!\n\n` +
        `Mobile: ${mobileNumber}\n` +
        `Plan: ${selectedPlan.name}\n` +
        `Amount: ${selectedPlan.price}\n` +
        `Validity: ${selectedPlan.validity}`
      );
      setMobileNumber("");
      setSelectedPlan(null);
      setShowPayment(false);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#106b82ff" }}>Recharge Plans</h1>
      
      {!showPayment ? (
        <>
          <div style={{ background: "#106b82ff", padding: "25px", borderRadius: "10px", margin: "30px auto", maxWidth: "500px", textAlign: "center" }}>
            <h3>Enter Your Mobile Number</h3>
            <input
              type="tel"
              placeholder="Enter 10-digit number"
              value={mobileNumber}
              onChange={handleMobileChange}
              style={{ ...inputStyle, width: "80%", textAlign: "center", fontSize: "18px" }}
            />
            {mobileNumber.length === 10 && (
              <p style={{ color: "green", marginTop: "10px" }}>✓ Valid number: {mobileNumber}</p>
            )}
          </div>

          <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "30px" }}>Choose your recharge plan</p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
            {plans.map((plan) => (
              <div key={plan.id} style={planCardStyle}>
                <div style={{ borderBottom: "2px solid #eee", paddingBottom: "15px", marginBottom: "15px" }}>
                  <h3 style={{ margin: "0", color: "#106b82ff" }}>{plan.name}</h3>
                  <div style={{ fontSize: "28px", fontWeight: "bold", color: "#106b82ff", marginTop: "10px" }}>{plan.price}</div>
                </div>
                <div style={{ textAlign: "left", flexGrow: 1 }}>
                  <p><strong>Validity:</strong> {plan.validity}</p>
                  <p><strong>Data:</strong> {plan.data}</p>
                  <p><strong>Calls:</strong> Unlimited</p>
                </div>
                <button
                  onClick={() => handlePlanSelect(plan)}
                  style={selectButton}
                  disabled={mobileNumber.length !== 10}
                >
                  {mobileNumber.length === 10 ? "Select Plan" : "Enter Mobile First"}
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={{ maxWidth: "600px", margin: "40px auto", padding: "40px", background: "white", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0,0,0,0.1)" }}>
          <h2 style={{ color: "#106b82ff", textAlign: "center" }}>Confirm Recharge</h2>
          
          <div style={{ background: "#f8f9fa", padding: "25px", borderRadius: "10px", margin: "30px 0" }}>
            <h3>Order Summary</h3>
            <div style={summaryItemStyle}>
              <span>Mobile Number:</span>
              <strong>{mobileNumber}</strong>
            </div>
            <div style={summaryItemStyle}>
              <span>Selected Plan:</span>
              <strong>{selectedPlan.name}</strong>
            </div>
            <div style={summaryItemStyle}>
              <span>Amount:</span>
              <strong style={{ color: "#106b82ff", fontSize: "24px" }}>{selectedPlan.price}</strong>
            </div>
            <div style={summaryItemStyle}>
              <span>Validity:</span>
              <strong>{selectedPlan.validity}</strong>
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <button onClick={handlePayment} style={payButtonStyle}>
              Pay Now
            </button>
            <button
              onClick={() => setShowPayment(false)}
              style={{ ...payButtonStyle, background: "#95a5a6" }}
            >
              ← Change Plan
            </button>
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/" style={linkStyle}>← Back to Home</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
}

// Styles
const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "8px 16px",
  background: "rgba(255,255,255,0.2)",
  borderRadius: "5px"
};

const linkStyle = {
  display: "inline-block",
  padding: "12px 24px",
  background: "#106b82ff",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold"
};

const inputStyle = {
  padding: "12px",
  fontSize: "16px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  width: "100%"
};

const buttonStyle = {
  padding: "12px",
  background: "#106b82ff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer"
};

const planCardStyle = {
  background: "white",
  borderRadius: "10px",
  padding: "25px",
  width: "280px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  border: "1px solid #e0e0e0",
  display: "flex",
  flexDirection: "column"
};

const selectButton = {
  padding: "15px",
  background: "#106b82ff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "15px"
};

const summaryItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
  borderBottom: "1px solid #ddd"
};

const payButtonStyle = {
  padding: "15px 30px",
  background: "#106b82ff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  minWidth: "150px"
};

export default App;