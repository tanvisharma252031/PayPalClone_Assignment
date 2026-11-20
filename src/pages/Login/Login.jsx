
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    navigate("/");
  };

  return (
    <main className="login-page">
      <div className="login-card">

        <div className="login-logo">
          PayPal
        </div>

        <div className="login-form">

          <input
            type="text"
            placeholder="Email or mobile number"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className={error ? "login-input input-error" : "login-input"}
          />

          {error && (
            <p className="login-error">{error}</p>
          )}

          <p className="forgot-email">
            Forgotten your email?
          </p>

          <button
            className="login-next-btn"
            onClick={handleNext}
          >
            Next
          </button>

          <div className="login-divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <button
            className="login-signup-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>

        </div>
      </div>
    </main>
  );
}

export default Login;
