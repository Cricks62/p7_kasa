import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png"
import color from "../../styles/color";

const NavContainer = styled.div`
  padding: 30px 30px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${color.red};
  text-decoration: none;
  text-align: center;
  font-size: 24px;
  &.active {
    text-decoration: underline;
  }
`;



function Header() {
  const location = useLocation();

  return (
    <header>
      <NavContainer>
        <Link to="/">
          <img src={logo} alt="logo Kasa" />
        </Link>
        <nav>
          <StyledLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </StyledLink>
          <StyledLink to="/About" className={location.pathname === "/About" ? "active" : ""}>
            A Propos
          </StyledLink>
        </nav>
      </NavContainer>
    </header>
  );
}

export default Header;