/* eslint-disable */

const CardItem = ({ avatar, gains, description, buttonText }) => {
  return (
    <article className="testimonial-card">
      <header className="testimonial-card__header">
        <img
          src={avatar}
          alt=""
          role="presentation"
          className="testimonial-card__user-img"
        />
        <div>
          <h3 className="testimonial-card__user-name">Janice Dave</h3>
          <p className="testimonial-card__user-gains">
            <span aria-hidden="true">{gains.money}</span>
            <span className="sr-only">{gains.text}</span>
            in revenue
          </p>
        </div>
      </header>
      {description}
      <a
        href="#"
        className="default-btn  --bg-white --gray-border testimonial-card-btn"
      >
        {buttonText}
      </a>
    </article>
  );
};

export default CardItem;
