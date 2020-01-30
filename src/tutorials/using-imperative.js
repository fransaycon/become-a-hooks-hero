import React, { useRef, useImperativeHandle, forwardRef } from "react";

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
