import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"
import '../Header/index.css'






function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo Kasa" />
        </Link>
        <nav className="navContainer">
        <Link to="/" className={`lienHead ${location.pathname === "/" ? "active" : ""}`}>
            Accueil
          </Link>
          <Link to="/About" className={`lienHead ${location.pathname === "/About" ? "active" : ""}`}>
            A Propos
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;