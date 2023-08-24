import { Link } from "react-router-dom";
import pageImage from "../../assets/images/PageImage.png";

const PortfolioExample = () => {
  return (
    <section className="portfolio-example">
      <div className="container">
        <div className="portfolio-example__description">
          <h2 className="portfolio-example__description___title">
            Diversify your portfolio.
          </h2>
          <p className="portfolio-example__description___content">
            Create an even more impressive portfolio by creating case studies
            for your project. Simply follow our step
            <span aria-hidden="true">-</span>by
            <span aria-hidden="true">-</span>step guide.
          </p>
          <Link to="/signup" className="default-btn --bg-white">
            Start Free Trial
          </Link>
        </div>
        <div className="portfolio-example__illustration">
          <img src={pageImage} alt="" role="presentation" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioExample;
