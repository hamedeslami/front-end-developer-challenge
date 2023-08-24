import SignUpForm from "../../components/SignupForm";
import Slider from "../../components/Slider";
import Hero from "../../components/Slider/Hero";

const Singup = () => {
  return (
    <section className="singup-container" aria-label="sing up section">
      <SignUpForm />

      <div className="hero-container">
        <Slider />
        <Hero />
      </div>
    </section>
  );
};

export default Singup;
