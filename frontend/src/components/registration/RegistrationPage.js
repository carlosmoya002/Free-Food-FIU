import "../css/login_reg_style.css";

const RegistrationPage = () => {
  return (
    <div>
      <div class="html">
        <link rel="stylesheet" href="login_reg_style.css" />
      </div>
      <form>
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
              name="First Name"
              required
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
              name="Last Name"
              required
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
              name="password"
              required
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

            <button class="log-in"> Create Account </button>
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