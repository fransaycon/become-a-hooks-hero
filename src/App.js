import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Item } from "./atoms";
import { CONTENTS } from "./content";
import GlobalStyles from "./global-styles";
import { ClientRoutes } from "./routes";
import "typeface-rubik";

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
      {CONTENTS.map(c => (
        <Item to={c.route}>{c.preview}</Item>
      ))}
    </Container>
  </ItemContainer>
);

const App = () => (
  <Router>
    <GlobalStyles />
    <Switch>
      {CONTENTS.map(content => (
        <Route path={content.route}>{content.component}</Route>
      ))}
      <Route path={ClientRoutes.HOME}>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
