import React, { useState, useEffect } from "react";
import "./Wardrobe.css";
import Environmental from "../../Components/Environmental&Safety/Environmental";
import Contact from "../../Components/GetinTouch/Contact";
import Brand from "../../Components/Brands/Brand";
import fabrication1 from "../../Assets/fabrication1.jpg";
import fabrication2 from "../../Assets/fabrication2.webp";
import fabrication3 from "../../Assets/fabrication3.jpg";
import fabrication4 from "../../Assets/fabrication4.avif";
import fabrication5 from "../../Assets/fabrication5.webp";
import fabrication6 from "../../Assets/fabrication6.webp";
import fabrication7 from "../../Assets/fabrication7.webp";
import fabrication8 from "../../Assets/fabrication8.webp";
import fabrication9 from "../../Assets/fabrication9.jpg";
import fabrication10 from "../../Assets/fabrication10.webp";
import fabrication11 from "../../Assets/fabrication11.webp";
import fabrication12 from "../../Assets/fabrication12.webp";
import fabrication13 from "../../Assets/fabrication13.webp";
import fabrication14 from "../../Assets/fabrication14.jpg";
import fabrication15 from "../../Assets/fabrication15.webp";
import fabrication16 from "../../Assets/fabrication16.avif";
import SEO from "../../Components/SEO";

const Wardrobe = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
        title="Fabrication Services | Custom Metal & Wood Work - Aievvo Engineers"
        description="Get top-notch fabrication services with Aievvo Engineers Pvt. Ltd. We specialize in custom metal, wood, and steel fabrication for home and office projects."
        keywords="Fabrication Services, Custom Metal Work, Steel Fabrication, Wood Fabrication, Industrial Fabrication, Metal Structures, Welding Services, Aluminum Fabrication, CNC Cutting, Custom Design Solutions"
      />

      <section>
        {/* Modal */}
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
            <div className="heroimg2">
              <div className="overlay2">
                <h2>FABRICATION</h2>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="title-head">
                  <h3>FABRICATION</h3>
                  <p>
                    At AIEVVO ENGINEERS, we specialize in high-quality
                    fabrication solutions that combine durability, precision,
                    and innovation. Our expert craftsmanship ensures that every
                    fabricated structure meets the highest standards of strength
                    and design.
                  </p>
                  <p>
                    From metal frameworks to custom-built structures, we provide
                    tailored fabrication services to suit residential,
                    commercial, and industrial needs. Using advanced techniques
                    and premium materials, we create sturdy and aesthetically
                    appealing designs that enhance both functionality and visual
                    appeal.
                  </p>
                  <p>
                    Whether it’s structural fabrication, custom metalwork, or
                    specialized design elements, our team ensures precision and
                    excellence in every project. Let us bring your vision to
                    life with superior fabrication solutions.
                  </p>
                </div>
              </div>

              <div className="col-md-6 py-3">
                <img
                  src={fabrication12}
                  alt="Modular Kitchen"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  CABIN<span> FABRICATION</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={fabrication1}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(fabrication1)}
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={fabrication2}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(fabrication2)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={fabrication3}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(fabrication3)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={fabrication13}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  GATE<span> FABRICATION</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={fabrication4}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(fabrication4)}
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={fabrication5}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(fabrication5)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={fabrication6}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(fabrication6)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={fabrication14}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  SHEET<span> FABRICATION</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={fabrication7}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(fabrication7)}
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={fabrication8}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(fabrication8)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={fabrication15}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(fabrication15)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={fabrication16}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  RAILING<span> FABRICATION</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={fabrication9}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(fabrication9)}
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={fabrication11}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(fabrication11)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={fabrication12}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(fabrication12)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={fabrication10}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
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

export default Wardrobe;
