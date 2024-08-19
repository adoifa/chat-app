import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // استفاده از مسیر نسبی

const LoginSignup = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Login");
  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError(""); // Reset error state
    if (!mail || !pass) {
      setError("Email and password are required.");
      return;
    }

    if (pass === "12345") {
      if (action === "Login") {
        // Redirect to the chat page after successful login
        navigate('/chat');
      } else if (action === "Sign Up") {
        if (!user) {
          setError("Username is required.");
          return;
        }
        setAction("Login");
      }
    } else {
      setError("Invalid Password");
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src="/picture/user.png" alt="User Icon" />
            <input
              type="text"
              placeholder='Username'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="inputs">
        <div className="input">
          <img src="/picture/mail.png" alt="Mail Icon" />
          <input
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="/picture/lock.png" alt="Lock Icon" />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
      </div>
      {action === "Login" && (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={`submit ${action === "Login" ? "gray" : ""}`}
          onClick={() => setAction(action === "Login" ? "Sign Up" : "Login")}
        >
          {action === "Login" ? "Sign Up" : "Login"}
        </div>
        <div
          className="submit"
          onClick={handleSubmit}
        >
          {action}
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default LoginSignup;

