import { useState } from "react";
import "./Navbar.scss";
import { BsTelephone } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="absolute-background"></div>

      {/* navbar left part  */}
      <div className="navbar-left"> Modern Furniture </div>

      {/* navbar middle part  */}
      <div className="navbar-middle">
        <div className="navbar-middle-container">
          <BsTelephone />
          <p> +8844 444 222 </p>
        </div>
      </div>

      {/* navbar right part  */}

      <div className="navbar-right">
        <div className="navbar-right-container">
          <ul>
            <li>
              <a
                onClick={() => {
                  const destination = document.getElementById("products");
                  console.log(destination);
                  destination.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Products
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  const destination = document.getElementById("about");
                  console.log(destination);
                  destination.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {" "}
                About us{" "}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  const destination = document.getElementById("contact");
                  console.log(destination);
                  destination.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {" "}
                Contact us{" "}
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="mob">
        {isOpen ? (
          <li>
            <button onClick={handleClick}>
              <FiMenu color="#000000" />
            </button>
          </li>
        ) : (
          <div className="mob-container">
            <div>
              <li>
                <button onClick={handleClick}>
                  <AiOutlineCloseCircle color="#000000" />
                </button>
              </li>
            </div>
            <div className="mob-menu">
              <ul>
                <li>
                  <a
                    onClick={() => {
                      const destination = document.getElementById("products");
                      console.log(destination);
                      destination.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {" "}
                    Products{" "}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      const destination = document.getElementById("about");
                      console.log(destination);
                      destination.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {" "}
                    About us{" "}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      const destination = document.getElementById("contact");
                      console.log(destination);
                      destination.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {" "}
                    Contact us{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
