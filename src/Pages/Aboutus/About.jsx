import React, { useEffect } from "react";
import "./About.css";
import { Tab, Tabs, ProgressBar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutimg1 from "../../Assets/About1.png";
import mf2 from "../../Assets/mirror5.webp";
import aboutimg2 from "../../Assets/About2.png";
// import Feedback from "../../Components/ClientFeedback/feedback";
import Contact from "../../Components/GetinTouch/Contact";
import Brand from "../../Components/Brands/Brand";
import SEO from "../../Components/SEO";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <SEO
        title="About Us | Aievvo Engineers Pvt. Ltd. - Expert Interior Designers"
        description="Aievvo Engineers Pvt. Ltd. is a leading interior design and modular furniture company, offering customized fabrication, space planning, and modern home & office decor."
        keywords="About Aievvo Engineers, Interior Designers, Space Planning, Home Decor Experts, Custom Furniture, Office Interiors, Fabrication Services"
      />

      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2>ABOUT US</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Container fluid>
          <Row>
            <Col md={6}>
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
            </Col>

            <Col md={6} className="titleimg">
              <img src={mf2} alt="office Img" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className="py-3">
          <Row>
            <Col md={6} className="aboutimg">
              <img src={aboutimg1} alt="" className="img-fluid" />
            </Col>
            <Col md={4} className="sideinfo">
              <div className="tabstyle">
                <Tabs defaultActiveKey="history" className="mb-3">
                  <Tab eventKey="history" title="History">
                    <div className="content-box">
                      <p>
                        AIEVVO ENGINEERS PVT. LTD. Starting as a small design
                        studio, the company focused on creating functional and
                        aesthetic solutions for residential and commercial
                        clients. In its early years, AIEVVO ENGINEERS gained
                        recognition for its meticulous attention to detail and
                        innovative approach to design. The team’s dedication to
                        craftsmanship and client satisfaction helped the company
                        expand its portfolio and establish a loyal client base.
                      </p>

                      <div className="progress-section">
                        <p>
                          Renovation <span className="progress-value">75%</span>
                        </p>
                        <ProgressBar now={75} />
                        <p>
                          Functional Spaces{" "}
                          <span className="progress-value">85%</span>
                        </p>
                        <ProgressBar now={85} />
                        <p>
                          Architecture{" "}
                          <span className="progress-value">95%</span>
                        </p>
                        <ProgressBar now={95} />
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="mission" title="Mission">
                    <div className="content-box">
                      <p>
                        At AIEVVO ENGINEERS Interior Design, our mission is to
                        transform spaces into inspiring environments that
                        reflect individuality, enhance functionality, and create
                        lasting impressions. We strive to bring dreams to life
                        through innovative designs, attention to detail, and a
                        commitment to quality craftsmanship. Our goal is to make
                        exceptional design accessible to everyone, blending
                        aesthetics with practicality to craft spaces that are
                        not only beautiful but also meaningful and functional.
                        Through collaboration and creativity, we aim to exceed
                        expectations and leave a lasting impact on every project
                        we undertake.
                      </p>
                      <div className="progress-section">
                        <p>
                          Renovation <span className="progress-value">75%</span>
                        </p>
                        <ProgressBar now={75} />
                        <p>
                          Functional Spaces{" "}
                          <span className="progress-value">85%</span>
                        </p>
                        <ProgressBar now={85} />
                        <p>
                          Architecture{" "}
                          <span className="progress-value">95%</span>
                        </p>
                        <ProgressBar now={95} />
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="vision" title="Vision">
                    <div className="content-box">
                      <p>
                        At AIEVVO ENGINEERS Interior Design, our vision is to
                        become a global leader in interior design, recognized
                        for creating innovative, timeless spaces that inspire
                        and elevate lives. We aspire to set new standards in
                        design excellence by embracing creativity,
                        sustainability, and modern technology. By fostering
                        meaningful relationships with our clients and partners,
                        we aim to shape environments that reflect individuality
                        and leave a lasting legacy of beauty and functionality.
                      </p>
                      <div className="progress-section">
                        <p>
                          Renovation <span className="progress-value">75%</span>
                        </p>
                        <ProgressBar now={75} />
                        <p>
                          Functional Spaces{" "}
                          <span className="progress-value">85%</span>
                        </p>
                        <ProgressBar now={85} />
                        <p>
                          Architecture{" "}
                          <span className="progress-value">95%</span>
                        </p>
                        <ProgressBar now={95} />
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col md={6} className="rightimg">
              <img src={aboutimg2} alt="" className="img-fluid" />
            </Col>
            <Col md={6}>
              <div className="content">
                <div className="contenthead">
                  <h2>
                    OUR <span>MANAGEMENT TEAM</span>
                  </h2>
                </div>
                <p>
                  <span>A</span>t Aievvo Engineers Pvt. Ltd. , we believe that
                  exceptional design should seamlessly blend aesthetics,
                  functionality, and sustainability. Our approach is rooted in a
                  profound understanding of our clients’ needs and the unique
                  context of each project.
                </p>
                <p>
                  We collaborate closely with our clients throughout the entire
                  design process, ensuring that their vision is brought to life
                  in a way that is both beautiful and practical. By integrating
                  environmentally responsible practices, we create spaces that
                  are not only visually stunning but also harmonious with the
                  environment.
                </p>
                <p>
                  Our commitment to excellence drives us to deliver designs that
                  are timeless, innovative, and tailored to enhance the lives of
                  those who inhabit them.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col md={6}>
              <div className="content">
                <div className="contenthead">
                  <h2>
                    OUR <span>PEOPLE</span>
                  </h2>
                </div>
                <p>
                  <span>A</span>t Aievvo Engineers Pvt. Ltd. , we believe that
                  exceptional interior design goes beyond aesthetics; it’s about
                  creating spaces that inspire, function seamlessly, and respect
                  the environment. Our passion lies in understanding the unique
                  needs and desires of our clients, ensuring that each project
                  reflects their individuality and enhances their daily lives.
                </p>
                <p>
                  We immerse ourselves in the latest design trends and
                  sustainable practices, constantly pushing the boundaries of
                  what’s possible. Our commitment to innovation and excellence
                  allows us to transform ordinary spaces into extraordinary
                  experiences, blending beauty with practicality in every
                  detail.
                </p>
                <p>
                  With a keen eye for detail and a dedication to quality, we
                  strive to create interiors that are not only visually stunning
                  but also harmonious and functional. At Interioz, we are driven
                  by the belief that great design has the power to improve
                  lives, and we are dedicated to making that vision a reality
                  for each of our clients.
                </p>
              </div>
            </Col>

            <Col md={6} className="rightimg">
              <img src={aboutimg1} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
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

export default About;
