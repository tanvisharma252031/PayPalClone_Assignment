function AuthButtons({ onLogin }) {
  const handleSignup = () => alert("Sign Up clicked");

  return (
    <div className="auth-buttons">
      <button
        className="btn btn-outline"
        onClick={onLogin}
      >
        Log In
      </button>

      <button
        className="btn btn-filled"
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
}

export default AuthButtons;