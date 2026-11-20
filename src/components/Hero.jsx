import "./Hero.css";

function Hero({ onSignUp }) {
  return (
    <section className="hero">
      <h1>PayPal Open</h1>
      <h2>One platform for your business needs</h2>

      <p>
        PayPal Open unifies your PayPal business solutions
        to help you get paid, get growing, and get ahead.
      </p>

      <div className="hero-buttons">
        <button
          className="hero-btn hero-btn-primary"
          onClick={onSignUp}
        >
          Sign Up
        </button>

        <button className="hero-btn hero-btn-secondary">
          Contact Sales
        </button>
      </div>
    </section>
  );
}

export default Hero;