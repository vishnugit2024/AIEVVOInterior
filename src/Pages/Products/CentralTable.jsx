import React from "react";
import "./product.css";
import CentralTableImage1 from "../../Assets/centertabel1.webp";
import CentralTableImage2 from "../../Assets/centertabel2.jpg";
import CentralTableImage3 from "../../Assets/centertabel3.jpg";
import CentralTableImage4 from "../../Assets/centertabel4.jpg";
import CentralTableImage5 from "../../Assets/centertabel5.jpg";
import CentralTableImage6 from "../../Assets/centertabel6.webp";
import CentralTableImage7 from "../../Assets/centertabel7.jpg";
import CentralTableImage8 from "../../Assets/centertabel8.webp";
import CentralTableImage9 from "../../Assets/centertabel9.jpg";
import CentralTableImage10 from "../../Assets/centertabel10.webp";
const CentralTable = () => {
  const CentralTableimage = [
    CentralTableImage1,
    CentralTableImage2,
    CentralTableImage3,
    CentralTableImage4,
    CentralTableImage5,
    CentralTableImage6,
    CentralTableImage7,
    CentralTableImage8,
    CentralTableImage9,
    CentralTableImage10,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2 className="text-uppercase">MODERN CentralTable</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {CentralTableimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="CentralTable Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CentralTable;
