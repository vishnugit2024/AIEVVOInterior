import React from "react";
import "./product.css";

import OfficeTableImage3 from "../../Assets/table3.webp";
import OfficeTableImage4 from "../../Assets/table4.jpg";
import OfficeTableImage5 from "../../Assets/table5.webp";
import OfficeTableImage6 from "../../Assets/table6.webp";
import OfficeTableImage7 from "../../Assets/table7.webp";
import OfficeTableImage8 from "../../Assets/table8.webp";

const OfficeTable = () => {
  const OfficeTableimage = [
  
    OfficeTableImage3,
    OfficeTableImage4,
    OfficeTableImage5,
    OfficeTableImage6,
    OfficeTableImage7,
    OfficeTableImage8,
   
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2 className="text-uppercase">MODERN OfficeTable</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {OfficeTableimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="OfficeTable Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OfficeTable;
