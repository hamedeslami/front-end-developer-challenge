const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <section className="main-footer__section">
          <h2 className="main-footer__section___title">Fiber</h2>
          <p className="main-footer__section___content">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beatiful templates.
          </p>
          <p className="main-footer__section___content">
            Made with <span className="sr-only">love</span>{" "}
            <span aria-hidden="true">&#10084;</span>
            in the Netherlands.
          </p>
        </section>
        <section className="main-footer__section">
          <h2 className="main-footer__section___title">Sitemap</h2>
          <nav aria-label="Site menu navigation">
            <ul className="main-footer__list">
              <li>
                <a href="index.html" className="main-footer__list-item ">
                  Homepage
                </a>
              </li>
              <li>
                <a href="#" className="main-footer__list-item ">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="main-footer__list-item ">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="main-footer__list-item ">
                  Features
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="main-footer__section">
          <h2 className="main-footer__section___title">Resources</h2>
          <nav aria-label="Resources menu navigation">
            <ul className="main-footer__list">
              <li>
                <a href="#" className="main-footer__list-item ">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="main-footer__list-item ">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="main-footer__list-item ">
                  <abbr title="Frequent asked questions">FAQ</abbr>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="main-footer__section">
          <h2 className="main-footer__section___title">Company</h2>
          <nav aria-label="Company menu navigation">
            <ul className="main-footer__list">
              <li>
                <a href="#" className="main-footer__list-item ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="main-footer__list-item ">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="main-footer__list-item ">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="main-footer__section">
          <h2 className="main-footer__section___title">Portfolios</h2>
          <nav aria-label="Portfolios menu navigation">
            <ul className="main-footer__list">
              <li>
                <a href="#" className="main-footer__list-item ">
                  Sarah Andrews
                </a>
              </li>
              <li>
                <a href="#" className="main-footer__list-item ">
                  Mathew Higgins
                </a>
              </li>
              <li>
                <a href="#" className="main-footer__list-item ">
                  Janice Dave
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
