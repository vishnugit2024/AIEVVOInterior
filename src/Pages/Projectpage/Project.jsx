import React, { useEffect } from "react";
import Baar4 from "../../Assets/Baar4.webp";
import Baar5 from "../../Assets/Baar5.webp";
import Baar6 from "../../Assets/Baar6.webp";
import Baar7 from "../../Assets/Baar7.jpg";
import Baar8 from "../../Assets/Baar8.jpg";
import Baar10 from "../../Assets/Baar10.webp";
import Brand from "../../Components/Brands/Brand";
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
import OfficeTableImage3 from "../../Assets/table3.webp";
import OfficeTableImage4 from "../../Assets/table4.jpg";
import OfficeTableImage5 from "../../Assets/table5.webp";
import OfficeTableImage6 from "../../Assets/table6.webp";
import OfficeTableImage7 from "../../Assets/table7.webp";
import OfficeTableImage8 from "../../Assets/table8.webp";
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
import SEO from "../../Components/SEO";
const Project = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <SEO
        title="Our Projects | Interior Design, Modular Furniture & Fabrication - Aievvo Engineers"
        description="Explore Aievvo Engineers' successful projects in interior design, modular furniture, and fabrication. We deliver premium quality and innovative solutions."
        keywords="Aievvo Engineers Projects, Interior Design Portfolio, Modular Furniture Projects, Fabrication Work, Home Interiors, Office Design, Custom Furniture, Steel & Metal Fabrication, Residential Projects, Commercial Interiors"
      />

      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2>OUR PROJECTS</h2>
            </div>
          </div>
        </div>
      </section>

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
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={Baar5}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={Baar6}
                    alt="Wardrobe"
                    className="img-fluid small-image"
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
                  />
                </div>
                <div className="col-6">
                  <img
                    src={Baar8}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img src={Baar10} alt="Living Room" className="img-fluid" />
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
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={centertable3}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={centertable6}
                    alt="Wardrobe"
                    className="img-fluid small-image"
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
                  />
                </div>
                <div className="col-6">
                  <img
                    src={centertable9}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={centertable10}
                    alt="Living Room"
                    className="img-fluid"
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
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={chair6}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={chair7}
                    alt="Wardrobe"
                    className="img-fluid small-image"
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
                  />
                </div>
                <div className="col-6">
                  <img
                    src={chair9}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img src={chair10} alt="Living Room" className="img-fluid" />
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
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={reception2}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={reception3}
                    alt="Wardrobe"
                    className="img-fluid small-image"
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
                  />
                </div>
                <div className="col-6">
                  <img
                    src={reception5}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={reception6}
                    alt="Living Room"
                    className="img-fluid"
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
                OFFICE TABLE<span> DESIGN</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={OfficeTableImage3}
                alt="Modular Kitchen"
                className="img-fluid main-image"
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={OfficeTableImage4}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={OfficeTableImage5}
                    alt="Wardrobe"
                    className="img-fluid small-image"
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
                  />
                </div>
                <div className="col-6">
                  <img
                    src={OfficeTableImage7}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={OfficeTableImage8}
                    alt="Living Room"
                    className="img-fluid"
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
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={MirrorImage2}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={MirrorImage3}
                    alt="Wardrobe"
                    className="img-fluid small-image"
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
                  />
                </div>
                <div className="col-6">
                  <img
                    src={MirrorImage5}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={MirrorImage6}
                    alt="Living Room"
                    className="img-fluid"
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
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={ConsoleImage2}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={ConsoleImage3}
                    alt="Wardrobe"
                    className="img-fluid small-image"
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
                  />
                </div>
                <div className="col-6">
                  <img
                    src={ConsoleImage5}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={ConsoleImage6}
                    alt="Living Room"
                    className="img-fluid"
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
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={WorkStationImage2}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={WorkStationImage3}
                    alt="Wardrobe"
                    className="img-fluid small-image"
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
                  />
                </div>
                <div className="col-6">
                  <img
                    src={WorkStationImage5}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={WorkStationImage1}
                    alt="Living Room"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <Brand />
      </section>
    </>
  );
};

export default Project;
