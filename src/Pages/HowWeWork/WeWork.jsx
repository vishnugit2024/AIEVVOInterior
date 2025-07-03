import React, { useEffect } from "react";
import "./WeWork.css";
import Meet from "../../Assets/newchanges3.webp";
import Size from "../../Assets/newchanges4.webp";
import Analise from "../../Assets/Analise.png";
import Planning from "../../Assets/Planning.png";
import Contactimg from "../../Assets/Contact.png";
import Manufactore from "../../Assets/newchanges5.webp";
import Dayhome from "../../Assets/30Dayhome.png";
import Brand from "../../Components/Brands/Brand";
import Contact from "../../Components/GetinTouch/Contact";
import SEO from "../../Components/SEO";

const WeWork = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>

<SEO 
        title="How We Work | Interior Design & Fabrication Process - Aievvo Engineers"
        description="Learn how Aievvo Engineers Pvt. Ltd. transforms spaces with expert interior design, modular furniture, and fabrication services. See our step-by-step process."
        keywords="How We Work, Aievvo Engineers Process, Interior Design Process, Fabrication Process, Custom Furniture, Modular Furniture Manufacturing, Home Renovation Steps, Space Planning, Design Consultation, Project Execution"
      />


      <section>
        <div className="container-fluid">
          <div className="heroimg4">
            <div className="overlay4">
              <h2>OUR WORK PROCEDURE</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="servicehead py-4">
              <h1>
                HOW WE <span> WORK</span>
              </h1>
              <p>
                We at AIEVVO ENGINEERS provide services ranging from interior
                design, woodwork, furniture, home lighting, designer ceilings,
                wall painting and wallpaper and any type of civil works related
                to residential & commercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Meet} alt="Meet" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>MEETING THE DESIGNER</h1>
                <p>
                  At the heart of every beautiful space is a story waiting to be
                  told. Our "Meeting the Designer" session is your first step in
                  creating a space that's uniquely yours. Sit down with our
                  expert interior designer, share your ideas, and watch as your
                  vision takes shape. Whether it's a cozy home, a vibrant
                  office, or a luxurious retreat, this is where inspiration
                  meets expertise. Let us turn your dream design into reality,
                  one detail at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimgtitle1">
                <h1>ON-SITE MEASUREMENTS</h1>
                <p>
                  Every great design begins with accuracy. Our On-Site
                  Measurements service ensures that every dimension of your
                  space is carefully assessed and documented. From wall lengths
                  to ceiling heights and everything in between, we leave no
                  detail unchecked. This step allows us to create tailored
                  designs that fit seamlessly into your space, optimizing
                  functionality and aesthetics. With precise measurements, you
                  can trust that every element of your design will align
                  perfectly.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimg">
                <img src={Size} alt="Size" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Planning} alt="Planning" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>PRESENTING DESIGNS</h1>
                <p>
                  This is the moment where creativity meets reality. In our
                  Presenting Designs session, we showcase tailored concepts
                  crafted around your preferences and lifestyle. From layout
                  plans to color palettes and 3D renderings, every detail is
                  thoughtfully designed to reflect your vision. We’ll walk you
                  through each element, refining the design together until it
                  feels just right. Your feedback is our guide as we move closer
                  to turning these ideas into your dream space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimgtitle1">
                <h1>SHARING THE ESTIMATE</h1>
                <p>
                  Understanding your project's financial scope is a vital step
                  in bringing your vision to life. During our Sharing the
                  Estimate session, we provide a detailed breakdown of costs,
                  ensuring transparency and alignment with your budget. From
                  materials to labor and custom elements, every aspect is
                  clearly outlined, allowing you to make informed decisions with
                  confidence. Our goal is to deliver exceptional design within a
                  framework that works for you.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="workimg">
                <img src={Analise} alt="Analise" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Contactimg} alt="Contact" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>CONTRACT AND PAYMENT</h1>
                <p>
                  Once the design and estimate are finalized, it’s time to
                  formalize the project with a clear and concise Contract and
                  Payment Agreement. This document outlines the scope of work,
                  timelines, costs, and terms, ensuring mutual understanding and
                  trust. Our payment process is straightforward and flexible,
                  designed to suit your convenience while maintaining
                  transparency. Signing the contract marks the beginning of
                  turning your dream space into reality!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimgtitle1">
                <h1>INTELLIGENT MANUFACTURING</h1>
                <p>
                  Our Intelligent Manufacturing process combines cutting-edge
                  technology with expert craftsmanship to bring your designs to
                  life with unparalleled precision. By utilizing advanced tools
                  and automation, we ensure that every element is produced with
                  exact specifications, reducing waste and increasing
                  efficiency. This approach not only enhances the quality and
                  durability of your design but also accelerates production
                  timelines, ensuring your project is completed on schedule.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="workimg">
                <img src={Manufactore} alt="Manufactore" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Dayhome} alt="Dayhome" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>30 DAYS WONDER HOME</h1>
                <p>
                  Imagine a beautifully designed space, personalized just for
                  you, all within 30 days. Our 30 Days Wonder Home service is
                  designed to deliver stunning transformations in a month. From
                  conceptualization to completion, we handle every detail
                  efficiently, ensuring minimal disruption and maximum impact.
                  In just 30 days, your home will be transformed into a place
                  that reflects your style, meets your needs, and exceeds your
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
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

export default WeWork;
