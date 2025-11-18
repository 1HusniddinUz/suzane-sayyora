import "../../assets/HeroSection.css";
import logo from "../../assets/images/logo.png";

const HeroSection = () => {
  return (
    <div id="HeroSection" className="hero-section">
      <img className="hero-logo" src={logo} alt="SUZANE SAYYORA LOGOTIP" loading="lazy" />
    </div>
  );
};

export default HeroSection;
