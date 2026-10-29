import { useState } from "react";
import Navbar from "./components/Navbar";
import PageToggle from "./components/PageToggle";
import Hero from "./components/Hero";

function App() {
  const [tab, setTab] = useState("business");

  const handleLogin = () => {
    alert("Log In clicked");
  };

  const handleSignUp = () => {
    alert("Sign Up clicked");
  };

  return (
    <>
      <Navbar
        onLogin={handleLogin}
        onSignUp={handleSignUp}
      />

      <PageToggle active={tab} onChange={setTab} />

      <Hero onSignUp={handleSignUp} />
    </>
  );
}

export default App;