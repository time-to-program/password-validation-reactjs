import { useState } from "react";
import "./App.css";

function App() {
  // Define state variables for form input and errors
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMsg: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle user input changes for form fields
  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  // Validate the form input when the user submits the form
  const validateFormInput = (event) => {
    event.preventDefault();

    // Initialize an object to track input errors
    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Check if email and password are empty
    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter a valid email address",
        password: "Password should not be empty",
      });
      return;
    }

    // Check if email is empty
    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter a valid email address",
      });
      return;
    }

    // Check if password and confirm password match
    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be the same",
      });
      return;
    }

    // Check if password is empty
    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    // Clear any previous errors and show success message
    setFormError(inputError);
    setFormInput((prevState) => ({
      ...prevState,
      successMsg: "Validation Success",
    }));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Simple Form</h4>
        </div>

        <div className="card-body">
          <form onSubmit={validateFormInput}>
            {/* Email input */}
            <p className="label">Email</p>
            <input
              value={formInput.email}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="email"
              type="text"
              className="input"
              placeholder="Enter Email"
            />
            <p className="error-message">{formError.email}</p>

            {/* Password input */}
            <p className="label">Password</p>
            <input
              value={formInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <p className="error-message">{formError.password}</p>

            {/* Confirm Password input */}
            <p className="label">Confirm Password</p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Confirm Password"
            />

            <p className="error-message">{formError.confirmPassword}</p>
            <p className="success-message">{formInput.successMsg}</p>

            {/* Submit button */}
            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
