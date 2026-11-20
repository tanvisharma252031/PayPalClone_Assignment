import Logo from "./Logo";
import NavMenu from "./NavMenu";
import AuthButtons from "./AuthButtons";
import "./Navbar.css";

function Navbar({ onLogin, onSignUp }) {
  return (
    <header className="navbar">
      <Logo />
      <NavMenu />
      <AuthButtons onLogin={onLogin} onSignUp={onSignUp} />
    </header>
  );
}

export default Navbar;