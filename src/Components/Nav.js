import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

function Nav() {
  const { pathname } = useLocation();
  const [pos, setPos] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setPos(window.scrollY > 10);
    });
  }, []);
  return (
    <StyledNav pos={pos} pathname={pathname}>
      <StyledLogo>
        <Link to="/">
          <div>
            <img src={logo} alt="logo" />
            <span>Stress & Trauma</span>
          </div>
        </Link>
      </StyledLogo>
      <ul>
        <li className={pathname === "/app" ? "active" : ""}>
          <Link to="/app">Application</Link>
        </li>
        <li className={pathname === "/blog" ? "active" : ""}>
          <Link to="/blog">Blog</Link>
        </li>
        <li className={pathname === "/pro" ? "active" : ""}>
          <Link to="/pro">Praticiens</Link>
        </li>
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Nous contacter</Link>
        </li>
        <li className={pathname === "/faq" ? "active" : ""}>
          <Link to="/faq">Faq</Link>
        </li>
      </ul>
    </StyledNav>
  );
}
const StyledNav = styled.nav`
  position: fixed;
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.pos ? "#fff" : "transparent")};
  box-shadow: ${(props) => (props.pos ? "0 4px 2rem rgba(0,0,0,.1)" : "")};
  padding: 0 2rem;
  transition: all ease 0.5s;
  z-index: 10;
  a {
    text-decoration: none;
    color: ${(props) =>
      props.pos ? "#000" : props.pathname === "/" ? "#fff" : "#000"};
      transition: all ease 0.25s;
  }
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      position: relative;
      list-style: none;
      padding: 0 2rem;
      &::before {
        position: absolute;
        bottom: -5px;
        left: 10%;
        content: "";
        width: 0%;
        height: 3px;
        background: ${({ theme: { colors } }) => colors.blue};
        opacity: 0;
        transition: all ease 0.5s;
      }
      &:hover::before {
        opacity: 1;
        width: 80%;
      }
    }
    .active::before {
      opacity: 1;
      width: 80%;
    }
  }
`;
const StyledLogo = styled.div`
  margin-left: 2rem;
  img {
    width: 3rem;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export default Nav;
