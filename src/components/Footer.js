import "./Footer.scss";
import { AiFillFacebook } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-left">
          <h3 className="footer-container-left-title"> Modern Furniture </h3>

          <p>
            For many years, our company has been presenting a wide range of new,
            creative and modern furniture.
          </p>
        </div>
        <div className="footer-container-titles">
          <div className="footer-container-title">
            <h3> About us </h3>

            <ul>
              <li>New products</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Register</li>
            </ul>
          </div>
          <div className="footer-container-title">
            <h3> Explore </h3>

            <ul>
              <li>Donate</li>
              <li>Privacy policy</li>
              <li>Blog posts</li>
            </ul>
          </div>
          <div className="footer-container-title">
            <h3> Contact </h3>

            <ul>
              <li>Abovyan street 58/4, Erevan, Armenia</li>
              <li> +8844 444 222</li>
              <li>info@modernfurniture.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      

      <div className="copyright">
        <div className="copyright-p">
        <p> Copyright 2021. All rights Reserved </p>
        </div>    

      <div className="icons">
        <AiFillFacebook fill="rgba(255, 255, 255, 0.318)" fontSize="1.1rem" />
        <BsYoutube fill="rgba(255, 255, 255, 0.318)" fontSize="1.1rem" />
        <GrTwitter fill="rgba(255, 255, 255, 0.318)" fontSize="1.1rem" />
        <BsLinkedin fill="rgba(255, 255, 255, 0.318)" fontSize="1.1rem" />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
