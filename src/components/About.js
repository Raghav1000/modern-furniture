import react from "react";
import "./About.scss";
import images from "../constants/images";

const About = () => {
  return (
    <div id="about" className="about">
      <h3 className="about-heading"> About us </h3>

      <div className="about-container">
        <div className="about-container-left">
          <p>
            For many years, our company has been presenting a wide range of new,
            creative and modern furniture, trying to do everything to satisfy
            customers.
          </p>

          <h3> Our slogans are - </h3>

          <div className="slogan">
            <span> 1 </span>
            <h3> "Always forward" </h3>
          </div>

          <div className="slogan">
            <span> 2 </span>
            <h3> "Only perfection" </h3>
          </div>
        </div>

        <div className="about-container-right">
          <div className="about-container-right-feature">
            <h1> 130 + </h1>

            <p> Fresh interior design theme </p>
          </div>
          <div className="about-container-right-feature">
            <h1> 690 + </h1>

            <p> Furniture or home equipment </p>
          </div>
          <div className="about-container-right-feature">
            <h1> 930 + </h1>

            <p> Happy clients more for this </p>
          </div>
        </div>
      </div>

      <div className="about-img"> 
      <img src={images.bgsofa} />
        </div>
    </div>
  );
};

export default About;
