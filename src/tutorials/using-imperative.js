import React, { useRef, useImperativeHandle, forwardRef } from "react";

/**
 * What if we want to define a ref prop for a FUNCTIONAL COMPONENT?
 *
 * forwardRef and useImperativeHandle to the rescue.
 *
 * forwardRef from the name itself makes the ref property available for the functional component.
 * useImperativeHandle defines what the ref can do.
 *
 * Most of the time you don't need this.
 */
const Input = forwardRef((props, ref) => {
  const inputRef = useRef("");

  useImperativeHandle(ref, () => ({
    focus: () => {
      document.title = "I'm focusing!";
      inputRef.current.focus();
    },
    blur: () => {
      document.title = "I'm blurring!";
      inputRef.current.blur();
    },
    change: () => {
      document.title = inputRef.current.value;
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Focus to see something amazing"
      {...props}
    />
  );
});

const TitleFocusWriter = () => {
  const ref = useRef(null);
  const handleBlur = () => {
    ref.current.blur();
  };
  const handleFocus = () => {
    ref.current.focus();
  };
  const handleChange = () => {
    ref.current.change();
  };

  return (
    <Input
      ref={ref}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChange={handleChange}
    />
  );
};

export default TitleFocusWriter;
