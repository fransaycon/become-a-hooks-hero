import React from "react";

/**
 * There are many types of components in React.
 *
 * Aside from host components, here we have FUNCTIONAL COMPONENTS.
 *
 * Functional components are custom defined re-usable functions that returns
 * other functional components and/or host components.
 *
 * Only host components can generate a view.
 *
 * One way to pass values through components is through the use of props.
 * Props are attributes that came from the parent.
 *
 * You may also define default props.
 */

const Greeting = props => <h1>Hello {props.name}</h1>;

const GreetingContainer = () => <Greeting name="ReactJS PH!" />;

export default GreetingContainer;
