import Advantage from "../../components/Advantage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PortfolioExample from "../../components/PortfolioExample";
import Testimonials from "../../components/Testimonials";

const Landing = () => {
  return (
    <>
      <Header />

      <Hero />

      <main>
        <Advantage />

        <PortfolioExample />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
};

export default Landing;
