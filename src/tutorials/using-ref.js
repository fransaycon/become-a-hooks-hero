import React, { useRef, useState } from "react";

/**
 * References in react can be used in different ways.
 *
 * The useRef hook gives you the ability to define a reference.
 *
 * Usually, references are used to either point to a dom node or keep a mutable value that won't trigger a rerender.
 */
const AlertMe = () => {
  const [submissions, setSubmissions] = useState(0);
  const inputRef = useRef();
  const previousValue = useRef();

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
          <span>Previous Submission: {previousValue.current}</span>
        </div>
      </div>
    </div>
  );
};

export default AlertMe;
