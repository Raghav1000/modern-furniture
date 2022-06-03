import react from "react";
import "./Products.scss";
import {FaCircle} from "react-icons/fa"
import images from "../constants/images";

const Products = () => {
  return (
    <section id="products" className="products">
      <h3 className="products-heading"> New products </h3>

      <div className="products-container">
        <div className="products-container-type">
          <img src={images.sofa} height="130px"  />
          <h4> Sofa </h4>
          <div className="products-container-type-detail"> 
         <div className="products-container-type-detail-price">
          <p> $ 1200 </p>
          </div>
          <div className="products-container-type-detail-color">
          <FaCircle fill="#E12DFE" fontSize="0.5rem" />
          <FaCircle fill="#000000" fontSize="0.5rem" />
          <FaCircle fill="#FE662D" fontSize="0.5rem" />
          </div>
          </div>
        </div>
        <div className="products-container-type">
          <img src={images.chair} height="130px" />
          <h4> Chair </h4>
          <div className="products-container-type-detail"> 
         <div className="products-container-type-detail-price">
          <p> $ 1000 </p>
          </div>
          <div className="products-container-type-detail-color">
          <FaCircle fill="#000000" fontSize="0.5rem" />
          <FaCircle fill="#FE662D" fontSize="0.5rem" />
          <FaCircle fill="#E12DFE" fontSize="0.5rem" />
          </div>
          </div>
        </div>
  
        <div className="products-container-type">
          <img src={images.armchair} height="130px" />
          <h4> Arm chair </h4>
          <div className="products-container-type-detail"> 
         <div className="products-container-type-detail-price">
          <p> $ 1600 </p>
          </div>
          <div className="products-container-type-detail-color">
          <FaCircle fill="#E12DFE" fontSize="0.5rem" />
          <FaCircle fill="#000000" fontSize="0.5rem" />
          <FaCircle fill="#FE662D" fontSize="0.5rem" />
          </div>
          </div>
        </div>
        <div className="products-container-type">
          <img src={images.table} height="130px" />
          <h4> Table </h4>
          <div className="products-container-type-detail"> 
         <div className="products-container-type-detail-price">
          <p> $ 800 </p>
          </div>
          <div className="products-container-type-detail-color">
          <FaCircle fill="#2D76FE" fontSize="0.5rem" />
          <FaCircle fill="#FE662D" fontSize="0.5rem" />
          <FaCircle fill="#000000" fontSize="0.5rem" />
          </div>
          </div>
        </div>
        <div className="products-container-type">
          <img src={images.officechair} height="130px" />
          <h4> Office chair </h4>
          <div className="products-container-type-detail"> 
         <div className="products-container-type-detail-price">
          <p> $ 1600 </p>
          </div>
          <div className="products-container-type-detail-color">
          <FaCircle fill="#2D76FE" fontSize="0.5rem" />
          <FaCircle fill="#E12DFE" fontSize="0.5rem" />
          <FaCircle fill="#2DFE72" fontSize="0.5rem" />
          </div>
          </div>
        </div>
      
        <div className="products-container-type">
          <img src={images.bean} height="130px" />
          <h4> Bean </h4>
          <div className="products-container-type-detail"> 
         <div className="products-container-type-detail-price">
          <p> $ 400 </p>
          </div>
          <div className="products-container-type-detail-color">
          <FaCircle fill="#000000" fontSize="0.5rem" />
          <FaCircle fill="#2DFE72" fontSize="0.5rem" />
          <FaCircle fill="#2D76FE" fontSize="0.5rem" />
          </div>
          </div>
        </div>
        
      
          
      </div>
      <button> View more </button>
    </section>
  );
};

export default Products;
