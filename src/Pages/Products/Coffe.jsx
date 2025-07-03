import React from "react";
import "./product.css";
import CoffeImage3 from "../../Assets/coffe3.webp";
import CoffeImage4 from "../../Assets/coffe4.webp";
import CoffeImage5 from "../../Assets/coffe5.webp";
import CoffeImage6 from "../../Assets/coffe6.webp";
import CoffeImage7 from "../../Assets/coffe7.webp";
import CoffeImage8 from "../../Assets/coffe8.webp";
import CoffeImage9 from "../../Assets/coffe9.webp";
import CoffeImage10 from "../../Assets/coffe10.jpg";
const Coffe = () => {
  const Coffeimage = [
    CoffeImage3,
    CoffeImage4,
    CoffeImage5,
    CoffeImage6,
    CoffeImage7,
    CoffeImage8,
    CoffeImage9,
    CoffeImage10,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2>MODERN COFFEE TABLE</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {Coffeimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="Coffe Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Coffe;
