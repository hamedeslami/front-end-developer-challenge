import { Link } from "react-router-dom";

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
                <Link to="/" className="main-footer__list-item ">
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/" className="main-footer__list-item ">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="main-footer__list-item ">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/" className="main-footer__list-item ">
                  Features
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="main-footer__section">
          <h2 className="main-footer__section___title">Resources</h2>
          <nav aria-label="Resources menu navigation">
            <ul className="main-footer__list">
              <li>
                <Link to="/" className="main-footer__list-item ">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/" className="main-footer__list-item ">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="main-footer__list-item ">
                  <abbr title="Frequent asked questions">FAQ</abbr>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="main-footer__section">
          <h2 className="main-footer__section___title">Company</h2>
          <nav aria-label="Company menu navigation">
            <ul className="main-footer__list">
              <li>
                <Link to="/" className="main-footer__list-item ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="main-footer__list-item ">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/" className="main-footer__list-item ">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="main-footer__section">
          <h2 className="main-footer__section___title">Portfolios</h2>
          <nav aria-label="Portfolios menu navigation">
            <ul className="main-footer__list">
              <li>
                <Link to="/" className="main-footer__list-item ">
                  Sarah Andrews
                </Link>
              </li>
              <li>
                <Link to="/" className="main-footer__list-item ">
                  Mathew Higgins
                </Link>
              </li>
              <li>
                <Link to="/" className="main-footer__list-item ">
                  Janice Dave
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
