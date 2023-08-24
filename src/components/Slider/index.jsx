import SignUpImage from "../../assets/images/SignUpImage.png";
import PageImage from "../../assets/images/PageImage.png";

const Slider = () => {
  return (
    <div className="singup-img-box carousel">
      <div className="slider">
        <img src={SignUpImage} alt="" role="presentation" className="src" />
        <img src={PageImage} alt="" role="presentation" className="src" />
        <img src={SignUpImage} alt="" role="presentation" className="src" />
        <img src={PageImage} alt="" role="presentation" className="src" />
      </div>
    </div>
  );
};

export default Slider;
