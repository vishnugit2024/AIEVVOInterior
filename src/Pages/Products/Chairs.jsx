import React from "react";
import "./product.css";
import ChairsImage1 from "../../Assets/chair1.webp";
import ChairsImage2 from "../../Assets/chair2.webp";
import ChairsImage3 from "../../Assets/chair3.webp";
import ChairsImage4 from "../../Assets/chair4.jpg";
import ChairsImage5 from "../../Assets/chair5.jpg";
import ChairsImage6 from "../../Assets/chair6.webp";
import ChairsImage7 from "../../Assets/chair7.webp";
import ChairsImage8 from "../../Assets/chair8.webp";
import ChairsImage9 from "../../Assets/chair9.jpg";
import ChairsImage10 from "../../Assets/chair10.webp";
const Chairs = () => {
  const Chairsimage = [
    ChairsImage1,
    ChairsImage2,
    ChairsImage3,
    ChairsImage4,
    ChairsImage5,
    ChairsImage6,
    ChairsImage7,
    ChairsImage8,
    ChairsImage9,
    ChairsImage10,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2 className="text-uppercase">MODERN Chairs</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {Chairsimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="Chairs Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Chairs;
