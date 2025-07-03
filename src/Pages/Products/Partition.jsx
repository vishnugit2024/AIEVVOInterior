import React from "react";
import "./product.css";
import PartitionImage1 from "../../Assets/Partition1.webp";
import PartitionImage2 from "../../Assets/Partition2.webp";
import PartitionImage3 from "../../Assets/Partition3.webp";
import PartitionImage4 from "../../Assets/Partition4.webp";
import PartitionImage5 from "../../Assets/Partition5.webp";
import PartitionImage6 from "../../Assets/Partition6.png";
import PartitionImage7 from "../../Assets/Partition7.webp";
import PartitionImage8 from "../../Assets/Partition8.png";

const Partition = () => {
  const Partitionimage = [
    PartitionImage1,
    PartitionImage2,
    PartitionImage3,
    PartitionImage4,
    PartitionImage5,
    PartitionImage6,
    PartitionImage7,
    PartitionImage8,
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2 className="text-uppercase">MODERN Partition</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <div className="row">
            {Partitionimage.map((image, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="product-image">
                  <img
                    src={image}
                    alt="Partition Assets"
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

export default Partition;
