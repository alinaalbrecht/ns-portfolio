import { FaChevronDown } from "react-icons/fa";
const Hero = (props) => {
  return (
    <div className="hero-container">
      <div className="hero-container__content-wrapper">
        <h1 className="content-wrapper__title">Hello,</h1>
        <div className="content-wrapper__text">
          My name is Nathaniel Smith and I am a Python Engineer based in Berlin.
          I am currently finishing my thesis in computational Chemistry at the
          Freie Universität and working as a student assistant at EU Openscreen.
        </div>
      </div>
      <div className="hero-container__chevron">
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Hero;
