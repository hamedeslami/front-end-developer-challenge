import userAvatar from "../../assets/images/UserAvatar.svg";
import userAvatar2 from "../../assets/images/UserAvatar2.svg";
import userAvatar3 from "../../assets/images/UserAvatar3.svg";
import CardItem from "./CardItem";

const Testimonials = () => {
  return (
    <section className="testimonials-section" aria-label="Testimonials">
      <div className="container">
        <CardItem
          avatar={userAvatar}
          buttonText={<a>View Sarah&apos;s Portfolio</a>}
          description={
            <p className="testimonial-card__content">
              Setting up my portfolio with Fiber took no more than 10 minutes.
              Since then, my portfolio has attracted a lot of clients and made
              me more than
              <span aria-hidden="true">$100k</span>
              <span className="sr-only">A hundred thousand dollars</span>.
            </p>
          }
          gains={{ text: "A hundred thousand dollars", money: "$100k " }}
        />

        <CardItem
          avatar={userAvatar2}
          buttonText={<a>View Mathew&apos;s Portfolio</a>}
          description={
            <p className="testimonial-card__content">
              I have been getting <span className="text-upper">a lot</span> of
              leads ever since I used Fiber&apos;s premade templates, now I just
              need to work on my case studes and I
              <abbr title="will">&apos;ll</abbr> be ready to go!
            </p>
          }
          gains={{ text: "A twenty thousand dollars", money: "$20k " }}
        />

        <CardItem
          avatar={userAvatar3}
          buttonText={<a>View Sarah&apos;s Portfolio</a>}
          description={
            <p className="testimonial-card__content">
              I only just started freelancing this year and I have already made
              more than I ever made in my full
              <span aria-hidden="true">-</span>time job. The templates are just
              so amazing.
            </p>
          }
          gains={{ text: "A thirty thousand dollars", money: "$30k " }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
