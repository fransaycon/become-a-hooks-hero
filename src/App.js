import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HelloWorld from "./tutorials/hello-world";
import UsingProps from "./tutorials/using-props";
import UsingState from "./tutorials/using-state";
import DestroyedState from "./tutorials/destroying-state";
import UsingRef from "./tutorials/using-ref";
import UsingEffects from "./tutorials/using-effects";
import UsingContexts from "./tutorials/using-contexts";
import PureComponents from "./tutorials/pure-components";
import { ClientRoutes } from "./routes";
import styled, { createGlobalStyle } from "styled-components";
import "typeface-rubik";
import { Item } from "./atoms";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #FEFEFE;
    font-family: Rubik, sans-serif;
    margin: 0;
  }
  
  input {
    font-family: Rubik, sans-serif;
    margin: 10px;
    font-size: 30px;
    width: 500px;
  }

  h1 {
    color: #222222;
    font-size: 52px;
    font-weight: 400;
    margin: 0;
  }

  span {
    font-size: 30px;
    margin: 10px;
  }

  button {
    background-color: royalblue;
    padding: 20px 50px 20px 50px;
    color: white;
    font-size: 30px;
    border: 0;
    border-radius: 20px;
    margin: 20px;

    &: hover {
      opacity: 0.9;
      outline: 0;
      cursor: pointer;
    }
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
      <Item to={ClientRoutes.USING_PROPS}>Using Props</Item>
      <Item to={ClientRoutes.USING_STATE}>Using States</Item>
      <Item to={ClientRoutes.DESTROYING_STATE}>Destroying State</Item>
      <Item to={ClientRoutes.USING_REF}>Using Ref</Item>
      <Item to={ClientRoutes.USING_EFFECTS}>Using Effects</Item>
      <Item to={ClientRoutes.USING_CONTEXT}>Using Contexts</Item>
      <Item to={ClientRoutes.PURE_COMPONENTS}>Pure Components</Item>
      <Item to={ClientRoutes.USING_PROPS}>Lorem Ipsum Item</Item>
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
      <Route path={ClientRoutes.USING_PROPS}>
        <UsingProps />
      </Route>
      <Route path={ClientRoutes.USING_STATE}>
        <UsingState />
      </Route>
      <Route path={ClientRoutes.DESTROYING_STATE}>
        <DestroyedState />
      </Route>
      <Route path={ClientRoutes.USING_REF}>
        <UsingRef />
      </Route>
      <Route path={ClientRoutes.USING_EFFECTS}>
        <UsingEffects />
      </Route>
      <Route path={ClientRoutes.USING_CONTEXT}>
        <UsingContexts />
      </Route>
      <Route path={ClientRoutes.PURE_COMPONENTS}>
        <PureComponents />
      </Route>
      <Route path={ClientRoutes.HOME}>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
