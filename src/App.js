import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HelloWorld from "./tutorials/hello-world";
import { ClientRoutes } from "./routes";
import styled, { createGlobalStyle } from "styled-components";
import "typeface-rubik";
import { Item } from "./atoms";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #FEFEFE;
    margin: 0;
  }

  h1 {
    color: #222222;
    font-family: Rubik, sans-serif;
    font-size: 52px;
    font-weight: 400;
    margin: 0;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  text-align: center;
`;

const Container = styled.div`
  margin: auto;
  display: grid;
  width: 100%;
  max-width: 1200px;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Hero = styled.h1`
  margin: 0px 50px 0px 50px;
  font-family: Rubik, sans-serif;
`;

const Home = () => (
  <ItemContainer>
    <Hero>Road To Become a React Hooks Hero</Hero>
    <Container>
      <Item to={ClientRoutes.HELLO_WORLD}>Hello World</Item>
      <Item to={ClientRoutes.USE_STATE_ONE}>Use State Introduction</Item>
      <Item to={ClientRoutes.USE_STATE_ONE}>Lorem Ipsum Item</Item>
      <Item to={ClientRoutes.USE_STATE_ONE}>Lorem Ipsum Item</Item>
      <Item to={ClientRoutes.USE_STATE_ONE}>Lorem Ipsum Item</Item>
      <Item to={ClientRoutes.USE_STATE_ONE}>Lorem Ipsum Item</Item>
      <Item to={ClientRoutes.USE_STATE_ONE}>Lorem Ipsum Item</Item>
      <Item to={ClientRoutes.USE_STATE_ONE}>Lorem Ipsum Item</Item>
      <Item to={ClientRoutes.USE_STATE_ONE}>Lorem Ipsum Item</Item>
    </Container>
  </ItemContainer>
);

const App = () => (
  <Router>
    <GlobalStyles />
    <Switch>
      <Route path={ClientRoutes.HELLO_WORLD}>
        <HelloWorld />
      </Route>
      <Route path={ClientRoutes.HOME}>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
