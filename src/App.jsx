
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import PageToggle from "./components/PageToggle";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactSales from "./pages/ContactSales/ContactSales";
import Login from "./pages/Login/Login";

function AppRoutes() {
  const [tab, setTab] = useState("business");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    alert("Sign Up clicked");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar
              onLogin={handleLogin}
              onSignUp={handleSignUp}
            />
            <PageToggle active={tab} onChange={setTab} />
            <Hero onSignUp={handleSignUp} />
            <Footer />
          </>
        }
      />

      <Route
        path="/contact-sales"
        element={
          <>
            <Navbar
              onLogin={handleLogin}
              onSignUp={handleSignUp}
            />
            <ContactSales />
            <Footer />
          </>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
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
