import React, { useState, useEffect } from "react";
import "./kitchen.css";

import Baar4 from "../../Assets/Baar4.webp";
import Baar5 from "../../Assets/Baar5.webp";
import Baar6 from "../../Assets/Baar6.webp";
import Baar7 from "../../Assets/Baar7.jpg";
import Baar8 from "../../Assets/Baar8.jpg";
import Baar10 from "../../Assets/Baar10.webp";
import centertable2 from "../../Assets/centertabel2.jpg";
import centertable3 from "../../Assets/centertabel3.jpg";
import centertable6 from "../../Assets/centertabel6.webp";
import centertable7 from "../../Assets/centertabel7.jpg";
import centertable9 from "../../Assets/centertabel9.jpg";
import centertable10 from "../../Assets/centertabel10.webp";
import chair5 from "../../Assets/chair5.jpg";
import chair6 from "../../Assets/chair6.webp";
import chair7 from "../../Assets/chair7.webp";
import chair8 from "../../Assets/chair8.webp";
import chair9 from "../../Assets/chair9.jpg";
import chair10 from "../../Assets/chair10.webp";
import reception1 from "../../Assets/reception1.webp";
import reception2 from "../../Assets/reception2.webp";
import reception3 from "../../Assets/reception3.webp";
import reception4 from "../../Assets/reception4.webp";
import reception5 from "../../Assets/reception5.webp";
import reception6 from "../../Assets/reception6.jpg";
import sidetable4 from "../../Assets/sidetable4.jpg";
import sidetable5 from "../../Assets/sidetable5.webp";
import sidetable7 from "../../Assets/sidetable7.webp";
import sidetable8 from "../../Assets/sidetable8.webp";
import sidetable9 from "../../Assets/sidetable9.webp";
import sidetable10 from "../../Assets/sidetable10.webp";
import partition1 from "../../Assets/Partition1.webp";
import partition2 from "../../Assets/Partition2.webp";
import partition3 from "../../Assets/Partition3.webp";
import partition4 from "../../Assets/Partition4.webp";
import partition5 from "../../Assets/Partition5.webp";
import partition6 from "../../Assets/Partition6.png";
import partition8 from "../../Assets/Partition8.png";
import SEO from "../../Components/SEO";

import Environmental from "../../Components/Environmental&Safety/Environmental";
import Contact from "../../Components/GetinTouch/Contact";
import Brand from "../../Components/Brands/Brand";

const ModularKitchen = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [sliderValue, setSliderValue] = useState(0);

  // Function to handle slider value change
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleShowModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>

<SEO 
        title="Interior Design Services | Home & Office Decor - Aievvo Engineers"
        description="Transform your home or office with Aievvo Engineers Pvt. Ltd. We offer luxury interior design, space planning, and custom decor solutions for residential and commercial spaces."
        keywords="Interior Design, Home Decor, Office Interiors, Modern Interior, Space Planning, Home Renovation, Custom Decor, Luxury Interiors, 3D Interior Design, Smart Home Solutions"
      />



      <section>
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!showModal}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Image Preview
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={modalImage} alt="Preview" className="img-fluid" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="container-fluid">
            <div className="heroimg1">
              <div className="overlay1">
                <h2>INTERIOR DESIGN</h2>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="title-head">
                  <h3>
                    INTERIOR <span>DESIGN</span>
                  </h3>
                  <p>
                    At AIEVVO ENGINEERS, we believe that interior design is more
                    than just aesthetics—it's about creating functional,
                    comfortable, and stylish spaces that reflect your
                    personality and lifestyle. From modern minimalism to classic
                    elegance, our expert designers curate every element of your
                    interiors to enhance both beauty and usability. We
                    specialize in transforming homes and commercial spaces with
                    innovative layouts, premium materials, and thoughtful
                    lighting to create a seamless blend of style and
                    functionality.
                  </p>
                  <p>
                    Whether it's a cozy living room, a luxurious bedroom, or a
                    sleek office space, our team ensures that every detail
                    aligns with your vision. With a focus on quality
                    craftsmanship and smart space utilization, we bring your
                    dream interiors to life.
                  </p>
                </div>
              </div>

              <div className="col-md-6 py-4">
                <img
                  src={partition8}
                  alt="Modular Kitchen"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ======== BAR Image ============= */}

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  BAR TROLLY<span> DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={Baar4}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(Baar4)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={Baar5}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(Baar5)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Baar6}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(Baar6)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={Baar7}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(Baar7)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Baar8}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(Baar8)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={Baar10}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(Baar10)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== CENTER TABLE ================ */}
        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  CENTER <span>TABLE DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={centertable2}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(centertable2)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={centertable3}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(centertable3)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={centertable6}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(centertable6)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={centertable7}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(centertable7)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={centertable9}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(centertable9)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={centertable10}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(centertable10)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== Chair  ================ */}

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  CHAIR <span> DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={chair5}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(chair5)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={chair6}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(chair6)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={chair7}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(chair7)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={chair8}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(chair8)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={chair9}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(chair9)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={chair10}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(chair10)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== RECEPTION Interior  ================ */}
        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  RECEPTION <span> DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={reception1}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(reception1)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={reception2}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(reception2)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={reception3}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(reception3)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={reception4}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(reception4)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={reception5}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(reception5)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={reception6}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(reception6)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== SIDE TABLE Interior  ================ */}
        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  SIDE <span> TABLE DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={sidetable4}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(sidetable4)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={sidetable5}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(sidetable5)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={sidetable7}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(sidetable7)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={sidetable8}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(sidetable8)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={sidetable9}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(sidetable9)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={sidetable10}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(sidetable10)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== partition TABLE Interior  ================ */}
        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  PARTITION<span> DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={partition1}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(partition1)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={partition4}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(partition2)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={partition5}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(partition3)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={partition2}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(partition4)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={partition3}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(partition5)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={partition6}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(partition6)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <Environmental />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Brand />
      </section>
    </>
  );
};

export default ModularKitchen;
