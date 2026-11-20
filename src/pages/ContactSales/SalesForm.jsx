
import { useState } from "react";
import "./SalesForm.css";

function SalesForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    country: "India",
    sales: "",
    paypalAccount: "",
    needs: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    const requiredFields = {
      firstName: "First name",
      lastName: "Last name",
      email: "Business email",
      phone: "Phone number",
      company: "Company name",
      website: "Company website",
      sales: "Annual Online Sales",
      paypalAccount: "PayPal Business account",
    };

    Object.entries(requiredFields).forEach(([key, label]) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${label} is required`;
      }
    });

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Thank you for contacting PayPal!");
    }
  };

  const renderInput = (name, placeholder, type = "text") => (
    <div className="form-field">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className={errors[name] ? "input-error" : ""}
      />

      {errors[name] && (
        <div className="field-error">
          <span className="error-icon">!</span>
          <span>{errors[name]}</span>
        </div>
      )}
    </div>
  );

  const renderSelect = (name, placeholder, options) => (
    <div className="form-field">
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={errors[name] ? "input-error" : ""}
      >
        <option value="" disabled>{placeholder}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {errors[name] && (
        <div className="field-error">
          <span className="error-icon">!</span>
          <span>{errors[name]}</span>
        </div>
      )}
    </div>
  );

  return (
    <section className="sales-form-card">
      <form className="sales-form" onSubmit={handleSubmit} noValidate>

        <p className="form-required">
          All fields are required.
        </p>

        {renderInput("firstName", "First name")}
        {renderInput("lastName", "Last name")}
        {renderInput("email", "Work email", "email")}
        {renderInput("phone", "Phone number", "tel")}
        {renderInput("company", "Company name")}
        {renderInput("website", "Company website", "url")}

        <div className="form-field">
          <label className="select-label">
            <span>Country</span>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
          </label>
        </div>

        {renderSelect("sales", "Annual Online Sales", [
          "Less than $500,000",
          "$500,000 - $1 million",
          "$1 million - $5 million",
          "$5 million - $10 million",
          "More than $10 million",
        ])}

        {renderSelect(
          "paypalAccount",
          "Do you already have a PayPal Business account?",
          ["Yes", "No"]
        )}

        <textarea
          name="needs"
          placeholder="Tell us more about your needs (optional)"
          rows="3"
          value={formData.needs}
          onChange={handleChange}
        />

        <label className="sales-consent">
          <input type="checkbox" />

          <span>
            I agree to PayPal contacting me, through marketing
            emails or by telephone, with relevant product or
            industry information. I know I can unsubscribe
            anytime. Click{" "}
            <a
              href="https://www.paypal.com/in/webapps/mpp/ua/privacy-full"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            to read PayPal's Privacy statement.
          </span>
        </label>

        <button type="submit" className="sales-submit">
          Submit
        </button>

      </form>
    </section>
  );
}

export default SalesForm;
