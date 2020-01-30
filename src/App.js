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
import GhibliMovies from "./tutorials/using-reducers";
import ClosestPrimeCalculator from "./tutorials/using-memo";
import Farm from "./tutorials/using-callbacks";
import MeasureTracker from "./tutorials/using-layout-effect";
import Forms from "./tutorials/using-custom-hooks";
import TitleFocusWriter from "./tutorials/using-imperative";
import CheckPointForm from "./tutorials/checkpoint-custom";
import CheckPointState from "./tutorials/checkpoint-state";
import GonnaMount from "./tutorials/checkpoint-effects";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F2F2F2;
    font-family: Rubik, sans-serif;
    margin: 0;
    background-size: cover;
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

  #header {
    color: royalblue;
    font-size: 62px;
    font-weight: bold;
    margin: 50px 0px 0px 0px;
    text-shadow: 1px 1px #FFFFFF;
    text-shadow: 2px 2px #FFFFFF;
    text-shadow: 3px 3px #FFFFFF;
    opacity: 0.95;
  }

  span {
    font-size: 30px;
    margin: 10px;
  }

  hr {
    margin: 5px 25% 25px 25%;
    height: 10px;
    background-color: royalblue;
    border: none;
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
    <Hero id="header">Road To Become a React Hooks Hero</Hero>
    <hr />
    <Container>
      <Item to={ClientRoutes.HELLO_WORLD}>Hello World</Item>
      <Item to={ClientRoutes.USING_PROPS}>Using Props</Item>
      <Item to={ClientRoutes.USING_STATE}>Using States</Item>
      <Item to={ClientRoutes.DESTROYING_STATE}>Destroying State</Item>
      <Item to={ClientRoutes.CHECKPOINT_STATE}>CHECKPOINT #1</Item>
      <Item to={ClientRoutes.USING_REF}>Using Ref</Item>
      <Item to={ClientRoutes.USING_IMPERATIVE}>Using Imperative Refs</Item>
      <Item to={ClientRoutes.USING_EFFECTS}>Using Effects</Item>
      <Item to={ClientRoutes.USING_LAYOUT_EFFECT}>Using Layout Effects</Item>
      <Item to={ClientRoutes.CHECKPOINT_EFFECTS}>CHECKPOINT #2</Item>
      <Item to={ClientRoutes.USING_CONTEXT}>Using Contexts</Item>
      <Item to={ClientRoutes.PURE_COMPONENTS}>Pure Components</Item>
      <Item to={ClientRoutes.USING_REDUCERS}>Using Reducers</Item>
      <Item to={ClientRoutes.USING_MEMO}>Using Memo</Item>
      <Item to={ClientRoutes.USING_CALLBACK}>Using Callback</Item>
      <Item to={ClientRoutes.USING_CUSTOM_HOOKS}>Creating Your Own Hooks</Item>
      <Item to={ClientRoutes.CHECKPOINT_CUSTOM}>CHECKPOINT #3</Item>
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
      <Route path={ClientRoutes.USING_IMPERATIVE}>
        <TitleFocusWriter />
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
      <Route path={ClientRoutes.USING_REDUCERS}>
        <GhibliMovies />
      </Route>
      <Route path={ClientRoutes.USING_MEMO}>
        <ClosestPrimeCalculator />
      </Route>
      <Route path={ClientRoutes.USING_CALLBACK}>
        <Farm />
      </Route>
      <Route path={ClientRoutes.USING_LAYOUT_EFFECT}>
        <MeasureTracker />
      </Route>
      <Route path={ClientRoutes.USING_CUSTOM_HOOKS}>
        <Forms />
      </Route>
      <Route path={ClientRoutes.CHECKPOINT_STATE}>
        <CheckPointState />
      </Route>
      <Route path={ClientRoutes.CHECKPOINT_EFFECTS}>
        <GonnaMount />
      </Route>
      <Route path={ClientRoutes.CHECKPOINT_CUSTOM}>
        <CheckPointForm />
      </Route>
      <Route path={ClientRoutes.HOME}>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
