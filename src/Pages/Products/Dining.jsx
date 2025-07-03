import React from "react";
import "./product.css";
import DiningImage1 from "../../Assets/DiningTable1.jpg";
import DiningImage2 from "../../Assets/DiningTable2.webp";
import DiningImage3 from "../../Assets/DiningTable3.webp";
import DiningImage4 from "../../Assets/DiningTable4.webp";
import DiningImage5 from "../../Assets/DiningTable5.jpg";
import DiningImage6 from "../../Assets/DiningTable6.jpg";
import DiningImage7 from "../../Assets/DiningTable7.webp";
import DiningImage8 from "../../Assets/DiningTable8.webp";
import DiningImage9 from "../../Assets/DiningTable9.webp";
import DiningImage10 from "../../Assets/DiningTable10.jpg";
const Dining = () => {
  const Diningimage = [
    DiningImage1,
    DiningImage2,
    DiningImage3,
    DiningImage4,
    DiningImage5,
    DiningImage6,
    DiningImage7,
    DiningImage8,
    DiningImage9,
    DiningImage10,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2>MODERN DINING TABLE</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {Diningimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="Dining Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dining;
