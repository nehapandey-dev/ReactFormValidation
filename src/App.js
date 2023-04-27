import "./App.css";
import { useState } from "react";
import FormValidation from "./FormValidation"

const App = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, SetError] = useState({});

  const handleChange = (e) => {
    const newObj = { ...formValues, [e.target.name]: e.target.value };
    setFormValues(newObj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    SetError(FormValidation(formValues));
    
  };


  return (
    <div className="border">
      <div className="container">
        <div className="img1">
          <h3>Welcome to our Login Page !</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type={"text"}
              placeholder="Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              id ="name"
              
            />

            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type={"text"}
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              id = "email"
            />

            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              id="password"
            />

            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}

            <br />
            <label htmlFor="confirm_password">Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="confirm password"
              name="confirm_password"
              value={formValues.confirm_password}
              onChange={handleChange}
              id="confirm_password"
            />

            {errors.confirm_password && (
              <p style={{ color: "red" }}>{errors.confirm_password}</p>
            )}
          </form>
          <br />
          <span>Else want to register using Gmail?</span>
          <button type="submit">Registration</button>
          <br />
          <span>Already have an account?</span>{" "}
          <span className="signin">Sign in now</span>
        </div>

        <div className="img2"></div>
      </div>
    </div>
  );
};

export default App;
