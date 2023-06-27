import React from "react";
import "../css/test.css";

const Test = function () {
  return (
    <div className="test">
      <div className="html">
        <link rel="stylesheet" href="test.css" />
      </div>
      <form>
        {/* Container  for items in the form*/}
        <div className="con">
          {/* Start of header */}
          <header className="head-form">
            <h2>Log In</h2>
            <p>Welcome back to Free Food FIU!</p>
          </header>
          {/* End of header*/}

          <br />

          <div className="field-set">
            <div className="logo-center">
              <figure>
                <img
                  src="./asset/FIU_LOGO.JPG"
                  alt="FIU LOGO"
                  width={150}
                  height={150}
                />
              </figure>
              <br />
            </div>

            {/* Email*/}
            <span className="input-item">
              <i className="fa fa-user-circle" />
            </span>
            <input
              className="form-input"
              id="txt-input"
              type="email"
              placeholder="Email"
              required=""
            />
            <br />
            
            {/*   Password */}
            <span className="input-item">
              <i className="fa fa-key" />
            </span>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              id="pwd"
              name="password"
              required=""
            />
            {/* Show/hide password  */}
            <span>
              <i
                className="fa fa-eye"
                aria-hidden="true"
                type="button"
                id="eye"
              />
            </span>
            <br />
            {/* Login Button */}
            <button className="log-in"> Log In </button>
          </div>
          {/*   other buttons */}
          <div className="other">
            {/*      Forgot Password button*/}
            <button className="btn submits frgt-pass">Forgot Password</button>
            {/*  Sign Up button */}
            <button className="btn submits sign-up">
              Sign Up
              {/*  Sign Up font icon */}
              <i className="fa fa-user-plus" aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Test;
