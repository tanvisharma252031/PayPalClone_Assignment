
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import PageToggle from "./components/PageToggle";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactSales from "./pages/ContactSales/ContactSales";
import Login from "./pages/Login/Login";

function HomePage() {
  const [tab, setTab] = useState("business");

  const handleSignUp = () => {
    alert("Sign Up clicked");
  };

  return (
    <>
      <Navbar onSignUp={handleSignUp} />
      <PageToggle active={tab} onChange={setTab} />
      <Hero onSignUp={handleSignUp} />
      <Footer />
    </>
  );
}

function ContactSalesPage() {
  return (
    <>
      <Navbar />
      <ContactSales />
      <Footer />
    </>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Routes>
      <Route path="/" element={<HomePageWithLogin onLogin={handleLogin} />} />
      <Route path="/contact-sales" element={<ContactSalesPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

function HomePageWithLogin({ onLogin }) {
  const [tab, setTab] = useState("business");

  const handleSignUp = () => {
    alert("Sign Up clicked");
  };

  return (
    <>
      <Navbar onLogin={onLogin} onSignUp={handleSignUp} />
      <PageToggle active={tab} onChange={setTab} />
      <Hero onSignUp={handleSignUp} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
