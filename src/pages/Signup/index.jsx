import SignUpForm from "../../components/SignupForm";
import Slider from "../../components/Slider";
import Hero from "../../components/Slider/Hero";

const SignUp = () => {
  return (
    <section className="signup-container" aria-label="sign up section">
      <SignUpForm />

      <div className="hero-container">
        <Slider />
        <Hero />
      </div>
    </section>
  );
};

export default SignUp;
