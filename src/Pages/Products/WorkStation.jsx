import React from "react";
import "./product.css";
import WorkStationImage1 from "../../Assets/workstation1.avif";
import WorkStationImage2 from "../../Assets/workstation2.avif";
import WorkStationImage3 from "../../Assets/workstation3.avif";
import WorkStationImage4 from "../../Assets/workstation4.avif";
import WorkStationImage5 from "../../Assets/workstation5.avif";

const WorkStation = () => {
  const WorkStationimage = [
    WorkStationImage1,
    WorkStationImage2,
    WorkStationImage3,
    WorkStationImage4,
    WorkStationImage5,
  
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2 className="text-uppercase">MODERN WorkStation</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {WorkStationimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img
                    src={image}
                    alt="WorkStation Assets"
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

export default WorkStation;
