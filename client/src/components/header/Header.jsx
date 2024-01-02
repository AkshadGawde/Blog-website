import React from "react";
import { AppBar, Toolbar, styled, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: #ffffff;
  color: black;
`;

const Container = styled(Toolbar)`
  justify-content: center;
  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const logout = async () => {
    // Implement your logout logic here, e.g., clearing authentication token, etc.
    // After logout logic, navigate to the "/account" route
    navigate("/account");
  };

  return (
    <Component>
      <Container>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Button onClick={logout}>LOGOUT</Button>
      </Container>
    </Component>
  );
};

export default Header;
