
import "./ContactSales.css";
import SalesForm from "./SalesForm";
import CallButton from "./CallButton";

function ContactSales() {
  return (
    <main className="contact-sales-page">

      <div className="contact-sales-container">

        {/* LEFT SECTION */}
        <section className="contact-sales-info">

          <h1>
            Connect with our
            <br />
            sales team.
          </h1>

          <p className="sales-intro">
            Tell us a little about your business so we can
            connect you with the right people.
          </p>

          {/* CALL BUTTON */}
          <CallButton />

          <div className="sales-help-details">
            <p>
              Need help with your existing account?
            </p>

            <a href="https://www.paypal.com/in/smarthelp/home">
              Visit our Help Centre
            </a>
          </div>

        </section>

        {/* RIGHT SECTION */}
        <SalesForm />

      </div>

    </main>
  );
}

export default ContactSales;
