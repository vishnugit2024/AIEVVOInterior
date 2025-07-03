import React from "react";
import "./product.css";
import barImage1 from "../../Assets/Baar1.webp";
import barImage2 from "../../Assets/Baar2.jpg";
import barImage3 from "../../Assets/Baar3.jpg";
import barImage4 from "../../Assets/Baar4.webp";
import barImage5 from "../../Assets/Baar5.webp";
import barImage6 from "../../Assets/Baar6.webp";
import barImage7 from "../../Assets/Baar7.jpg";
import barImage8 from "../../Assets/Baar8.jpg";
import barImage9 from "../../Assets/Baar9.webp";
import barImage10 from "../../Assets/Baar10.webp";
const Bar = () => {
  const barimage = [
    barImage1,
    barImage2,
    barImage3,
    barImage4,
    barImage5,
    barImage6,
    barImage7,
    barImage8,
    barImage9,
    barImage10,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2>MODERN BAR TROLLY</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {barimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img src={image} alt="Bar Assets" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bar;
