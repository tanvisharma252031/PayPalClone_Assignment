
import "./Footer.css";

function Footer() {
  return (
    <footer className="paypal-footer">
      <div className="footer-container">

        {/* PayPal Logo */}
        <div className="footer-logo">
          PayPal
        </div>

        {/* First Navigation Row */}
        <div className="footer-top">
          <nav className="footer-main-links">
            <span>Help</span>
            <span>Contact us</span>
            <span>Fees</span>
            <span>Security</span>
            <span>Shop</span>
            <span>Business Resource Center</span>
          </nav>

          <span className="footer-country">India</span>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Second Navigation Row */}
        <div className="footer-secondary">
          <nav className="footer-company-links">
            <span>About</span>
            <span>Newsroom</span>
            <span>Jobs</span>
            <span>Developers</span>
            <span>Partners</span>
          </nav>

          <nav className="footer-legal-links">
            <span>Accessibility</span>
            <span>Cookies</span>
            <span>Privacy</span>
            <span>CSR</span>
            <span>Annual Returns</span>
            <span>Legal</span>
          </nav>
        </div>

        {/* Legal Information */}
        <div className="footer-description">
          <p>
            PayPal Services in India are provided by PayPal Payments
            Private Limited (CIN U74990MH2009PTC194653). Users are
            advised to read the{" "}
            <a href="https://www.paypal.com/in/legalhub/home" target="_blank" rel="noreferrer">
              terms and conditions
            </a>{" "}
            carefully.
          </p>

          <p>
            When you visit or interact with our sites, services,
            applications, tools or messaging, we or our authorised
            service providers may use cookies, web beacons, and other
            similar technologies for storing information to help
            provide you with a better, faster and safer experience
            and for advertising purposes. Learn more here.
          </p>
        </div>

        {/* Footer Notes */}
        <div className="footer-notes">
          <p>
            Please note that charges may apply depending on the terms
            and coverage with your phone provider.
          </p>

          <p>
            All screen images shown are for illustrative purposes only.
            Actual experience will be based on account activity.
          </p>

          <p>
            ¹ PayPal Earnings-Q2, 2024, based on PayPal internal data.
          </p>

          <p>
            *Active accounts are accounts that have completed a
            transaction within the past 12 months.
          </p>

          <p>
            ² Available on eligible purchases.{" "}
            <a
              href="https://www.paypal.com/in/webapps/mpp/ua/useragreement-full"
              target="_blank"
              rel="noreferrer"
            >
              Limitations Apply
            </a>.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
