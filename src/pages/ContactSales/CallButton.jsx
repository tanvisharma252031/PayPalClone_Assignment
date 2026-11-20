import "./CallButton.css";

function CallButton() {
  return (
    <section className="call-section">
      <p>
        Want to speak with an account specialist right away?
      </p>

      <a href="tel:+912261451405" className="call-button">
        Call +91-22-61451405
      </a>
    </section>
  );
}

export default CallButton;