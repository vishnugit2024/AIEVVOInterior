import React, { useState, useEffect } from "react";
import "./Furniture.css";
import Brand from "../../Components/Brands/Brand";
import Contact from "../../Components/GetinTouch/Contact";
import Environmental from "../../Components/Environmental&Safety/Environmental";

import OfficeTableImage3 from "../../Assets/table3.webp";
import OfficeTableImage4 from "../../Assets/table4.jpg";
import OfficeTableImage5 from "../../Assets/table5.webp";
import OfficeTableImage6 from "../../Assets/table6.webp";
import OfficeTableImage7 from "../../Assets/table7.webp";
import OfficeTableImage8 from "../../Assets/table8.webp";
import sofa5 from "../../Assets/sofa5.png";
import MirrorImage1 from "../../Assets/mirror1.webp";
import MirrorImage2 from "../../Assets/mirror2.webp";
import MirrorImage3 from "../../Assets/mirror3.webp";
import MirrorImage4 from "../../Assets/mirror4.webp";
import MirrorImage5 from "../../Assets/mirror5.webp";
import MirrorImage6 from "../../Assets/mirror6.webp";
import ConsoleImage1 from "../../Assets/console1.webp";
import ConsoleImage2 from "../../Assets/console2.webp";
import ConsoleImage3 from "../../Assets/console3.webp";
import ConsoleImage4 from "../../Assets/console4.webp";
import ConsoleImage5 from "../../Assets/console5.webp";
import ConsoleImage6 from "../../Assets/console6.webp";
import WorkStationImage1 from "../../Assets/workstation1.avif";
import WorkStationImage2 from "../../Assets/workstation2.avif";
import WorkStationImage3 from "../../Assets/workstation3.avif";
import WorkStationImage4 from "../../Assets/workstation4.avif";
import WorkStationImage5 from "../../Assets/workstation5.avif";
import SofaImage1 from "../../Assets/sofa1.webp";
import SofaImage2 from "../../Assets/sofa2.webp";
import SofaImage3 from "../../Assets/sofa3.webp";
import SofaImage4 from "../../Assets/sofa4.webp";
import SofaImage5 from "../../Assets/sofa5.webp";
import SEO from "../../Components/SEO";

const Furniture = () => {
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
        title="Modular Furniture | Custom Home & Office Furniture - Aievvo Engineers"
        description="Upgrade your space with custom modular furniture by Aievvo Engineers Pvt. Ltd. We provide modern, space-saving, and stylish furniture for homes, offices, and commercial spaces."
        keywords="Modular Furniture, Custom Furniture, Office Furniture, Home Furniture, Wooden Cabinets, Smart Storage Solutions, Furniture Design, Space-saving Furniture, Luxury Modular Kitchens, Wardrobe Designs"
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
            <div className="heroimg3">
              <div className="overlay3">
                <h2>MODULAR FURNITURE</h2>
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
                    MODULAR <span> FURNITURE</span>
                  </h3>
                  <p>
                    AIEVVO ENGINEERS produces modular furniture that is pre-made
                    or order to made furniture which can be used according to
                    the need and room spacing. It’s easy to install & dismantle
                    according to need & it gives a modern look to your home or
                    office. As looking to the limitation of space in apartments
                    of flats, modular furniture is very helpful to save space.
                    You can use them in different ways.
                  </p>
                  <p>
                    AIEVVO ENGINEERS most popular modular furniture for homes is
                    the modular kitchen cabnets and wardrobes. Customization of
                    furniture is possible according to the need. Modular
                    bedrooms, living rooms, dining rooms, crockery units,
                    wardrobes, wine units, study units are available in a wide
                    range. Also TV show cases, entertainment units & computer
                    tables give a elegant look to the rooms.
                  </p>
                </div>
              </div>

              <div className="col-md-6 py-3">
                <img src={sofa5} alt="Modular Kitchen" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  OFFICE TABLE<span> DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={OfficeTableImage3}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(OfficeTableImage3)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={OfficeTableImage4}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(OfficeTableImage6)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={OfficeTableImage5}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(OfficeTableImage7)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={OfficeTableImage6}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(OfficeTableImage4)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={OfficeTableImage7}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(OfficeTableImage5)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={OfficeTableImage8}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(OfficeTableImage8)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  MIRROR<span> DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={MirrorImage1}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(MirrorImage1)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={MirrorImage2}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(MirrorImage2)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={MirrorImage3}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(MirrorImage3)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={MirrorImage4}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(MirrorImage4)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={MirrorImage5}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(MirrorImage5)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={MirrorImage6}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(MirrorImage6)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  CONSOLE TABLE<span> DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={ConsoleImage1}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(ConsoleImage1)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={ConsoleImage2}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(ConsoleImage2)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={ConsoleImage3}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(ConsoleImage3)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={ConsoleImage4}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(ConsoleImage4)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={ConsoleImage5}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(ConsoleImage5)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={ConsoleImage6}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(ConsoleImage6)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  WORK STATION TABLE<span> DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={WorkStationImage1}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(WorkStationImage1)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={WorkStationImage2}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(WorkStationImage2)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={WorkStationImage3}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(WorkStationImage3)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={WorkStationImage4}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(WorkStationImage4)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={WorkStationImage5}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(WorkStationImage5)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={WorkStationImage1}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(WorkStationImage1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  SOFA<span> DESIGN</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src={SofaImage1}
                  alt="Modular Kitchen"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(SofaImage1)}
                />

                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      src={SofaImage2}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(SofaImage2)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={SofaImage3}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(SofaImage3)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-6">
                    <img
                      src={SofaImage4}
                      alt="Kitchen Design"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(SofaImage4)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={SofaImage5}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(SofaImage5)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <img
                      src={SofaImage1}
                      alt="Living Room"
                      className="img-fluid"
                      onClick={() => handleShowModal(SofaImage1)}
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

export default Furniture;
