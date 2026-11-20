
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PageToggle from "./components/PageToggle";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactSales from "./pages/ContactSales/ContactSales";

function App() {
  const [tab, setTab] = useState("business");

  const handleLogin = () => {
    alert("Log In clicked");
  };

  const handleSignUp = () => {
    alert("Sign Up clicked");
  };

  return (
    <BrowserRouter>
      <Navbar
        onLogin={handleLogin}
        onSignUp={handleSignUp}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageToggle active={tab} onChange={setTab} />
              <Hero onSignUp={handleSignUp} />
            </>
          }
        />

        <Route
          path="/contact-sales"
          element={<ContactSales />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
