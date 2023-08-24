const SignUpForm = () => {
  return (
    <section className="form-container">
      <h1 className="logo">
        <a href="index.html">Fiber</a>
      </h1>
      <h2 className="singup-title">Create your Fiber account</h2>
      <form action="" className="form" autoComplete>
        <label htmlFor="form__name">Your Name</label>
        <input
          type="text"
          id="form__name"
          placeholder="John Doe"
          required
          minLength="3"
        />
        <ul role="log" className="error-box"></ul>

        <label htmlFor="form__email">
          E<span aria-hidden="true">-</span>mail
        </label>
        <input
          type="email"
          id="form__email"
          placeholder="john@example.com"
          required
          minLength="3"
        />
        <ul role="log" className="error-box"></ul>

        <label htmlFor="form__password">Password</label>
        <div className="form-password-box">
          <input
            type="password"
            id="form__password"
            placeholder="At least 8 characters"
            minLength="8"
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            aria-label="See password"
            className="password-btn"
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12ZM24 11.551C24 11.551 19.748 20 12.015 20C4.835 20 0 11.551 0 11.551C0 11.551 4.446 4 12.015 4C19.709 4 24 11.551 24 11.551ZM17 12C17 9.243 14.757 7 12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12Z" />
            </svg>
          </button>
        </div>
        <ul role="log" className="error-box"></ul>

        <div className="form-terms-box">
          <div className="styled-input">
            <input type="checkbox" id="form__terms" required />
            <span className="styled-input__checkbox"></span>
          </div>
          <label htmlFor="form__terms">
            By creating an account on Fiber, you agree to the{" "}
            <a href="#" className="form__terms___link">
              Terms & Conditions
            </a>
            .
          </label>
        </div>
        <ul role="log" className="error-box"></ul>

        <button type="submit" className="default-btn --w-100 --bg-blue">
          Create Fiber Account
        </button>
        <p className="form__hasAccount">
          Already have an account?{" "}
          <a href="#" className="link-signin">
            Sign in
          </a>
        </p>
      </form>
    </section>
  );
};

export default SignUpForm;
