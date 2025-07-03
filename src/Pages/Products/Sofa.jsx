import React from "react";
import "./product.css";
import SofaImage1 from "../../Assets/sofa1.webp";
import SofaImage2 from "../../Assets/sofa2.webp";
import SofaImage3 from "../../Assets/sofa3.webp";
import SofaImage4 from "../../Assets/sofa4.webp";
import SofaImage5 from "../../Assets/sofa5.webp";

const Sofa = () => {
  const Sofaimage = [
    SofaImage1,
    SofaImage2,
    SofaImage3,
    SofaImage4,
    SofaImage5,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2 className="text-uppercase">MODERN Sofa</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {Sofaimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="Sofa Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sofa;
