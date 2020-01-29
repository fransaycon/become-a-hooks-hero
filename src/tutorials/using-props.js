import React from "react";

/**
 * We can pass values to components through props.
 *
 * Props are readonly and can be passed down however deep you want.
 * Components in react are re-usable and can be called by other components.
 *
 * React will rerender the specific component whenever props change.
 */

const Greeting = props => <h1>Hello {props.name}</h1>;

const GreetingContainer = () => <Greeting name="ReactJS PH!" />;

export default GreetingContainer;
