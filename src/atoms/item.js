import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Rubik, sans-serif;
  font-size: 30px;
  text-transform: uppercase;
  box-sizing: border-box;
  height: 300px;
  border-radius: 10px;
  text-decoration: none;
  color: #222222;
  background-color: #e3e3e3;
  transition: all 0.5s ease;
  opacity: 0.9;
  font-weight: bold;
  padding: 20px;

  &:hover {
    border: 2px solid #ed2939;
    transform: scale(0.95);
  }
`;

const Item = ({ children, to }) => <StyledLink to={to}>{children}</StyledLink>;

export default Item;
