import React from "react";

/**
 * React is a javascript library for building user-interfaces.
 *
 * In React,
 * We have what we call host components ( built-in components )
 *
 * Dependent on the environment you intend to use React, these components
 * are parsed into objects that host can interpret.
 *
 * For the web we have,
 * div, input, h1, span, a, etc.
 *
 * For mobile, (React-Native),
 * Text, Stylesheet, TouchableOpacity, View, etc.
 *
 * We use JSX to better our lives*
 */

const HelloWorld = () => <h1>Hello World!</h1>;

export default HelloWorld;
