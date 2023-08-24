const Hero = () => {
  return (
    <section className="singup-hero">
      <h2 className="singup-hero__title">Unparalleled Templates</h2>
      <p className="singup-hero__content">
        Crafted by a team of professional designers, our templates are
        eunparalleled in the market.
      </p>
      <ul className="singup-hero__list">
        <li>
          <button
            className="singup-hero__btn-section"
            aria-label="About Fiber templates"
            data-order="0"
          ></button>
        </li>
        <li>
          <button
            className="singup-hero__btn-section"
            aria-label="About Fiber templates"
            data-order="1"
          ></button>
        </li>
        <li>
          <button
            className="singup-hero__btn-section"
            aria-label="About Fiber templates"
            data-order="2"
          ></button>
        </li>
        <li>
          <button
            className="singup-hero__btn-section"
            aria-label="About Fiber templates"
            data-order="3"
          ></button>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
