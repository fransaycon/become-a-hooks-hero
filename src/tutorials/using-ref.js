import React, { useRef, useState } from "react";

/**
 * In React, a reference contains a node or value that is mutable without triggering a re-render.
 *
 * The useRef hook gives you the ability to define a reference.
 *
 * There are two uses for references,
 * Passing the reference to the built-in prop ref of a HOST COMPONENT, you can access the DOM properties of that component.
 * Keeping a value that persists across renders as long as the component is mounted.
 */
const AlertMe = () => {
  const [submissions, setSubmissions] = useState(0);
  const inputRef = useRef();
  const previousValue = useRef("none");

  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <button
        onClick={() => {
          alert(inputRef.current.value);
          previousValue.current = inputRef.current.value;
        }}
      >
        Alert Me!
      </button>
      <button
        onClick={() => {
          setSubmissions(s => s + 1);
        }}
      >
        Submit!
      </button>
      <div>
        <div>
          <span>No. of Submissions: {submissions}</span>
        </div>
        <div>
          <span>Previous Alert After Submission: {previousValue.current}</span>
        </div>
      </div>
    </div>
  );
};

export default AlertMe;
