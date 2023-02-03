import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png"
import color from "../../styles/color";
import '../Header/index.css'



const StyledLink = styled(Link)`
  color: ${color.red};
  text-decoration: none;
  font-size: 24px;
  &.active {
    text-decoration: underline;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;



function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo Kasa" />
        </Link>
        <nav className="navContainer">
          <StyledLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </StyledLink>
          <StyledLink to="/About" className={location.pathname === "/About" ? "active" : ""}>
            A Propos
          </StyledLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;