import react from "react";
import "./Contact.scss";
import { AiFillFacebook } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h3 className="contact-heading"> Contact </h3>

      <div className="contact-container">
        <div className="contact-container-left">
          <div className="contact-container-left-icons">
            <AiFillFacebook fill="#e8900c" fontSize="1.3rem" />
            <BsYoutube fill="#e8900c" fontSize="1.3rem" />
            <GrTwitter fill="#e8900c" fontSize="1.3rem" />
            <BsLinkedin fill="#e8900c" fontSize="1.3rem" />
          </div>

          <p className="contact-container-left-timing">
             
            Hours: Monday - Friday 8:00am to 10:00pm 
          </p>

          <div className="contact-container-left-icon">
            <BsTelephone  />
            <p> +8844 444 222</p>
          </div>
          <div className="contact-container-left-icon">
            <MdOutlineEmail />
            <p> info@modernfurniture.com </p>
          </div>
          <div className="contact-container-left-icon">
            <GrLocation />
            <p> Abovyan street 58/4, Erevan, Armenia </p>
          </div>
        </div>

        <div className="contact-container-right">
          <form className="contact-container-right-form">
             <div className="name"> 
            <label> Name </label>  
             
            <input />
            </div>
            <div className="name">
            <label> Email </label>  
            <input />
            </div>
            <div className="name"> 
            <label> Your message </label>  
            <textarea />
            </div>
            <button> Send </button>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
