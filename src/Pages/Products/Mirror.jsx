import React from "react";
import "./product.css";
import MirrorImage1 from "../../Assets/mirror1.webp";
import MirrorImage2 from "../../Assets/mirror2.webp";
import MirrorImage3 from "../../Assets/mirror3.webp";
import MirrorImage4 from "../../Assets/mirror4.webp";
import MirrorImage5 from "../../Assets/mirror5.webp";
import MirrorImage6 from "../../Assets/mirror6.webp";
import MirrorImage7 from "../../Assets/mirror7.webp";
import MirrorImage8 from "../../Assets/mirror8.webp";
import MirrorImage9 from "../../Assets/mirror9.webp";
import MirrorImage10 from "../../Assets/mirror10.webp";
const Mirror = () => {
  const Mirrorimage = [
    MirrorImage1,
    MirrorImage2,
    MirrorImage3,
    MirrorImage4,
    MirrorImage5,
    MirrorImage6,
    MirrorImage7,
    MirrorImage8,
    MirrorImage9,
    MirrorImage10,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2 className="text-uppercase">MODERN Mirror</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {Mirrorimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="Mirror Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mirror;
