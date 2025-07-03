import React, { useState, useEffect } from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import sliderImage1 from "../../Assets/AIEBanner4.webp";
import sliderImage3 from "../../Assets/mirror4.png";
import sliderImage4 from "../../Assets/WINE CABINETS.avif";
import sliderImage2 from "../../Assets/coffe4.png";
import ourservice1 from "../../Assets/ourservice1.png";
import ourservice2 from "../../Assets/ourservice2.png";
import ourservice3 from "../../Assets/ourservice3.png";
import Component1 from "../../Assets/Component1.png";
import Component2 from "../../Assets/Component2.png";
import Component3 from "../../Assets/Component3.png";
import Component4 from "../../Assets/Component4.png";
import mf2 from "../../Assets/mf2.webp";
import Work2 from "../../Assets/Work2.png";
import Work4 from "../../Assets/Work4.png";
import slide1 from "../../Assets/newchanges1.webp";
import slide2 from "../../Assets/newChanges2.avif";
import slide3 from "../../Assets/newchanges2.webp";
import Slider from "react-slick";

// =============================

import Baar1 from "../../Assets/Baar1.webp";
import Baar2 from "../../Assets/Baar2.jpg";
import Baar3 from "../../Assets/Baar3.jpg";
import Baar4 from "../../Assets/Baar4.webp";

import Baar9 from "../../Assets/centertabel6.webp";
import Baar10 from "../../Assets/centertabel8.webp";
import Baar11 from "../../Assets/centertabel10.webp";

// ===========================================

import chair1 from "../../Assets/chair1.webp";
import chair2 from "../../Assets/chair2.webp";
import chair3 from "../../Assets/chair3.webp";
import chair4 from "../../Assets/chair4.jpg";

// ==============================================

import coffe1 from "../../Assets/coffe1.png";
import coffe2 from "../../Assets/coffe2.webp";
import coffe3 from "../../Assets/coffe3.webp";
import coffe4 from "../../Assets/coffe4.webp";
import coffe5 from "../../Assets/coffe5.webp";
import coffe8 from "../../Assets/coffe8.png";

// =====================================================

import console9 from "../../Assets/console9.jpg";
import diningtabel7 from "../../Assets/DiningTable7.webp";

// ===================================================

import sidetable2 from "../../Assets/sidetable2.webp";
import table8 from "../../Assets/table8.webp";

import sidetable6 from "../../Assets/sidetable6.webp";

// ===============================================

import sofa1 from "../../Assets/sofa1.webp";
import sofa3 from "../../Assets/sofa3.webp";

// =================================================

import table5 from "../../Assets/table5.webp";
import table6 from "../../Assets/table6.webp";

// ============================================

import workstation3 from "../../Assets/workstation3.avif";
import workstation5 from "../../Assets/workstation5.avif";

// =====================================================

import centertable1 from "../../Assets/centertabel1.webp";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../../Components/SEO";

const Home = () => {
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

  const downslide = [
    { src: slide1, alt: "Image 1" },
    { src: slide3, alt: "Image 3" },
    { src: slide2, alt: "Image 2" },
    { src: slide1, alt: "Image 4" },
    { src: slide3, alt: "Image 6" },
    { src: slide2, alt: "Image 5" },
  ];

  const settings = {
    dots: false, // Enable dots for navigation if needed
    infinite: true,
    speed: 2000,
    slidesToShow: 3, // Number of images shown at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false, // Prevent pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Aievvo Engineers Pvt. Ltd. | Interior Design & Modular Furniture"
        description="Aievvo Engineers Pvt. Ltd. specializes in interior design, modular furniture, fabrication, and customized home & office solutions. Transform your space with modern, stylish, and high-quality designs."
        keywords="Interior Design, Modular Furniture, Custom Fabrication, Home Renovation, Office Interior, Modern Decor, Wooden Furniture, Custom Cabinets, Steel Fabrication, Space Optimization"
      />

      <section>
        <div className="carousel-container">
          <Carousel
            controls={true}
            indicators={false}
            interval={2000}
            fade={true}
            pause={false}
          >
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src={sliderImage1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>
                  RENOVATE YOUR HOME WITH <br />
                  <span>AIEVVO ENGINEERS</span>
                </h1>
                <p>
                  Modern Style creates functional spaces with a delightful
                  aesthetic.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src={sliderImage2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1>EXPERT INTERIOR DESIGN SERVICES</h1>
                <p>
                  Transform your space with our unique interior design
                  solutions.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src={sliderImage3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>MODERN ARCHITECTURAL SOLUTIONS</h1>
                <p>We deliver modern and timeless architectural designs.</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Slide 4 */}
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src={sliderImage4}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>MODERN FURNITURE</h1>
                <p>We deliver modern furniture for your comfort life.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* Social Media Icons */}
          <div className="social-media-icons">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61574116371522"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/aievvo?igsh=MTEycW5nczRjMzY3dw=="
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a target="_blank" href="#" aria-label="Youtube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="title-head">
                <h3>
                  ABOUT <span>AIEVVO ENGINEERS</span>
                </h3>
                <p>
                  Welcome to AIEVVO ENGINEERS - the complete interior design
                  company. We provide interior designing and interior works for
                  Residential & Commercial area at reasonable costs. AIEVVO
                  ENGINEERS Private Limited is incepted with the idea of
                  providing seamless solutions for complete home interiors to
                  customers of new homes. Our production works are done at the
                  factory, as per design and customized measurements, using the
                  finest brand materials, delivered and installed at your place
                  following all safety protocols. AIEVVO ENGINEERS assures
                  quality interiors at reasonable costs, so go ahead with
                  confidence and get in touch with us for a free consultation
                  and estimate to the best interior works.
                </p>
              </div>
            </div>

            <div className="col-md-6 titleimg">
              <img src={mf2} alt="office Img" />
            </div>
          </div>
        </div>
      </section>

      <section className="ourprojects">
        <div className="container-fluid">
          <div className="row">
            <div className="content-head pb-2">
              <h2>
                OUR <span>PROJECTS</span>
              </h2>
            </div>

            {/* Left Column Slider */}
            <div className="col-md-4 pb-3">
              <Carousel
                controls={true}
                indicators={false}
                interval={3000}
                pause={false}
                fade={true}
              >
                {/* Slide 1 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={Baar1} alt="Slide 1" />
                  <Carousel.Caption>
                    <h3>BAR TROLLY</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={Baar2} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>BAR TROLLY</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 3 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={Baar3} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>BAR TROLLY</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 4 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={Baar4} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>BAR TROLLY</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={Baar9} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>CENTER TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={Baar10} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>CENTER TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={Baar11} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>CENTER TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            {/* mid Column Slider */}
            <div className="col-md-4 pb-3">
              <Carousel
                controls={true}
                indicators={false}
                interval={3000}
                pause={false}
                fade={true}
              >
                {/* Slide 1 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={chair1} alt="Slide 1" />
                  <Carousel.Caption>
                    <h3>CHAIR</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={chair2} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>CHAIR</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 3 */}

                <Carousel.Item>
                  <img className="d-block w-100" src={chair3} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>CHAIR</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 4 */}

                <Carousel.Item>
                  <img className="d-block w-100" src={chair4} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>CHAIR</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={coffe8} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>COFFEE TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={coffe2} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>COFFEE TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={coffe3} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>COFFEE TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={coffe4} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>COFFEE TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={coffe5} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>COFFEE TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            {/* right Column Slider */}
            <div className="col-md-4">
              <Carousel
                controls={true}
                indicators={false}
                interval={3000}
                pause={false}
                fade={true}
              >
                {/* Slide 1 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={workstation5}
                    alt="Slide 1"
                  />
                  <Carousel.Caption>
                    <h3>WORK STATION</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={workstation3}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h3>WORK STATION</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 3 */}

                <Carousel.Item>
                  <img className="d-block w-100" src={table5} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>OFFICE TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 4 */}

                <Carousel.Item>
                  <img className="d-block w-100" src={table8} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>OFFICE TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={sofa1} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>SOFA</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={sofa3} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>SOFA</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={sidetable6}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h3>SIDE TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={sidetable2}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h3>SIDE TABLE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/Project" className="btn">
              View All
            </Link>
          </div>
        </div>
      </section>

      <section className="ourservices">
        <div className="container-fluid">
          <div className="row">
            <div className="content-head pb-2">
              <h2>
                OUR <span>SERVICES</span>
              </h2>
            </div>
            <div className="row">
              {[
                {
                  img: ourservice1,
                  title: "MODULAR FURNITURE",
                  desc: "Enhance your space with customized modular furniture designed for functionality, style, and efficient space utilization.",
                },
                {
                  img: ourservice2,
                  title: "INTERIOR DESIGNING",
                  desc: "Transform your interiors with innovative designs that blend aesthetics, comfort, and modern functionality.",
                },
                {
                  img: ourservice3,
                  title: "FABRICATION WORKS",
                  desc: "Precision-engineered fabrication solutions tailored to meet diverse structural and industrial requirements.",
                },
              ].map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="service-box text-center">
                    <img
                      src={item.img}
                      alt={`Icon ${index + 1}`}
                      className="service-icon"
                    />
                    <h4 className="service-title">{item.title}</h4>
                    <div className="underline"></div>
                    <p className="service-description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link to="/MoreService" className="btn">
              View All
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid py-5  outline">
          <div className="row">
            <div className="col-md-3 col-6 warranty">
              <img src={Component1} alt="Component1" />
            </div>
            <div className="col-md-3 col-6 warranty">
              <img src={Component2} alt="Component1" />
            </div>
            <div className="col-md-3 col-6 warranty1">
              <img src={Component3} alt="Component1" />
            </div>
            <div className="col-md-3 col-6 warranty">
              <img src={Component4} alt="Component1" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row ">
            <div className="content-head py-3">
              <h2>
                OUR <span>WORK</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={centertable1}
                alt="Modular Kitchen"
                className="img-fluid main-image"
                onClick={() => handleShowModal(centertable1)}
              />

              <div className="row mt-3">
                <div className="col-6 ">
                  <img
                    src={coffe1}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(coffe1)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={coffe8}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(coffe8)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={console9}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(console9)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={diningtabel7}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(diningtabel7)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={table6}
                    alt="Living Room"
                    className="img-fluid"
                    onClick={() => handleShowModal(table6)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </section>

      <section>
        <div className="container my-5">
          {/* Section title */}
          <div className="content-head1 ">
            <h5>HOW WE WORK</h5>
            <h2>OUR WORK PROCEDURE</h2>
          </div>

          {/* Work procedure steps */}
          <div className="row mt-4">
            {[
              {
                img: Work2,
                title: "CLIENT DESIGN CONSULTATION",
                text: "Free consultation meeting to design your home perfectly.",
              },
              {
                img: Work4,
                title: "FINALIZE QUOTATION",
                text: "Get a detailed quotation of the work.",
              },
              {
                img: Work2,
                title: "GET DESIGNS",
                text: "Get 3D designs to choose, and the materials will be processed according to you.",
              },
              {
                img: Work4,
                title: "MOVE IN TIMELY",
                text: "Complete interior will be installed at your home.",
              },
            ].map((item, index) => (
              <div className="col-md-3 col-6 mb-4" key={index}>
                <div className="card h-100">
                  <div className="card-body text-center d-flex flex-column align-items-center">
                    <img src={item.img} alt="icon" className="card-img" />
                    <h5 className="fw-bold mt-3">{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-4">
            <Link to="/WeWork" className="btn">
              View All
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid pb-1">
          <Slider {...settings}>
            {downslide.map((image, idx) => (
              <div key={idx} className="col-md-4">
                <img
                  className="d-block img-fluid small-image1"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
