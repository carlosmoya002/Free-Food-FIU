import React, { useState } from "react";
import "../css/login_reg_style.css";

const RegistrationPage = () => {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password,setPassword] = useState("");
  const [preferences, setPreferences] = useState([]);


  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = {email, firstName, lastName, password, preferences};

    if (
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.password
    ) {
      // Error message (NOT IMPLEMENTED YET)
      return;
    }

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      // MISSING IMPLEMENTATION
    }

    if (response.ok) {
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
      console.log("New user created!");
    }
  };

  return (
    <div>
      <div class="html">
        <link rel="stylesheet" href="login_reg_style.css" />
      </div>
      <form onSubmit={handleSubmit}>
        <div class="con">
          <header class="head-form">
            <h2>Sign Up Here</h2>
            <p>Welcome to Free Food FIU!</p>
            <p>Enter your information to get started!</p>
          </header>
          <br />

          <div class="field-set">
            <div class="logo-center">
              <figure>
                <img
                  src="./asset/FIU_LOGO.JPG"
                  alt="FIU LOGO"
                  width="150"
                  height="150"
                />
              </figure>
              <br />
            </div>

            <span class="input-item">
              <i class="fa fa-user-circle"></i>
            </span>

            <input
              class="form-input"
              id="txt-input"
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <span class="input-item">
              <i class="fa fa-user-circle"></i>
            </span>

            <input
              class="form-input"
              type="text"
              placeholder="First Name"
              id="txt-input"
              required
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <br></br>

            <span class="input-item">
              <i class="fa fa-user-circle"></i>
            </span>

            <input
              class="form-input"
              type="text"
              placeholder="Last Name"
              id="txt-input"
              required
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <br />

            <span class="input-item">
              <i class="fa fa-key"></i>
            </span>

            <input
              class="form-input"
              type="password"
              placeholder="Password"
              id="pwd"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span>
              <i
                class="fa fa-eye"
                aria-hidden="true"
                type="button"
                id="eye"
              ></i>
            </span>

            <br />

            <button class="log-in" type="submit"> Create Account </button>
          </div>

          <div class="other">
            <p>Already have an account?</p>
            <button class="back-to-login">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;