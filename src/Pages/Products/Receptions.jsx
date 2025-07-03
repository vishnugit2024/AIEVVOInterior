import React from "react";
import "./product.css";
import ReceptionsImage1 from "../../Assets/reception1.webp";
import ReceptionsImage2 from "../../Assets/reception2.webp";
import ReceptionsImage3 from "../../Assets/reception3.webp";
import ReceptionsImage4 from "../../Assets/reception4.webp";
import ReceptionsImage5 from "../../Assets/reception5.webp";
import ReceptionsImage6 from "../../Assets/reception6.jpg";
import ReceptionsImage7 from "../../Assets/reception7.jpg";
import ReceptionsImage8 from "../../Assets/reception8.webp";

const Receptions = () => {
  const Receptionsimage = [
    ReceptionsImage1,
    ReceptionsImage2,
    ReceptionsImage3,
    ReceptionsImage4,
    ReceptionsImage5,
    ReceptionsImage6,
    ReceptionsImage7,
    ReceptionsImage8,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2 className="text-uppercase">MODERN Receptions</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {Receptionsimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img
                    src={image}
                    alt=" Receptions Assets"
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Receptions;
