import React from "react";
import "./product.css";
import SideTableImage1 from "../../Assets/sidetable1.webp";
import SideTableImage2 from "../../Assets/sidetable2.webp";
import SideTableImage3 from "../../Assets/sidetable3.webp";
import SideTableImage4 from "../../Assets/sidetable4.jpg";
import SideTableImage5 from "../../Assets/sidetable5.webp";
import SideTableImage6 from "../../Assets/sidetable6.webp";
import SideTableImage7 from "../../Assets/sidetable7.webp";
import SideTableImage8 from "../../Assets/sidetable8.webp";
import SideTableImage9 from "../../Assets/sidetable9.webp";
import SideTableImage10 from "../../Assets/sidetable10.webp";
const SideTable = () => {
  const SideTableimage = [
    SideTableImage1,
    SideTableImage2,
    SideTableImage3,
    SideTableImage4,
    SideTableImage5,
    SideTableImage6,
    SideTableImage7,
    SideTableImage8,
    SideTableImage9,
    SideTableImage10,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2 className="text-uppercase">MODERN SideTable</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {SideTableimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="SideTable Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SideTable;
