import heroIcon from "../../assets/images/hero-Illustration.png";

const Hero = () => {
  return (
    <div role="banner" className="hero">
      <div className="container">
        <img
          src={heroIcon}
          alt=""
          role="presentation"
          className="hero__illustration"
        />
        <section className="hero__introduction">
          <div className="classification" aria-label="ranking classification">
            <span className="classification__stars" aria-hidden="true"></span>
            <p>Rated 4.8/5 (243 reviews)</p>
          </div>
          <h2 className="hero__introduction___title">
            Create your portfolio in minutes.
          </h2>
          <p className="hero__introduction___content">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beatiful templates.
          </p>
          <a href="singup.html" className="default-btn --bg-blue">
            Start Free Trial
          </a>
          <a href="#" className="default-link">
            View Examples
          </a>
          <div className="hero__introduction___advantages">
            <p>
              <svg
                className="icon"
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                  fill="#45B19E"
                />
              </svg>
              No Credit Card Required
            </p>
            <p>
              <svg
                className="icon"
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                  fill="#45B19E"
                />
              </svg>
              10 Free templates
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
