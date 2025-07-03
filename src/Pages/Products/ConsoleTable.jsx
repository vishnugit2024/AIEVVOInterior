import React from "react";
import "./product.css";
import ConsoleImage1 from "../../Assets/console1.webp";
import ConsoleImage2 from "../../Assets/console2.webp";
import ConsoleImage3 from "../../Assets/console3.webp";
import ConsoleImage4 from "../../Assets/console4.webp";
import ConsoleImage5 from "../../Assets/console5.webp";
import ConsoleImage6 from "../../Assets/console6.webp";
import ConsoleImage7 from "../../Assets/console7.jpg";
import ConsoleImage8 from "../../Assets/console8.jpg";
import ConsoleImage9 from "../../Assets/console9.jpg";
const ConsoleTable = () => {
  const Consoleimage = [
    ConsoleImage1,
    ConsoleImage2,
    ConsoleImage3,
    ConsoleImage4,
    ConsoleImage5,
    ConsoleImage6,
    ConsoleImage7,
    ConsoleImage8,
    ConsoleImage9,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2>MODERN CONSOLE TABLE</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {Consoleimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="Console Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsoleTable;
