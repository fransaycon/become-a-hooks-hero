import React, { useState } from "react";

const useForm = submitCallback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    submitCallback(values);
  };

  const handleChange = event => {
    event.persist();

    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, handleSubmit };
};

const Forms = () => {
  const printValues = values => {
    alert(`Email: ${values.email} && Password: ${values.password}`);
  };
  const { values, handleChange, handleSubmit } = useForm(printValues);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          value={values.email}
          type="text"
          placeholder="Email"
        />
        <br />
        <input
          name="password"
          onChange={handleChange}
          value={values.password}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Forms;
