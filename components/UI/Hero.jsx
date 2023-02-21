import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import useDownloader from "react-use-downloader";
import heroImg from "../../public/images/atas.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Helo 👋" />
              <h2 className="mt-3 mb-3">I&apos;m Reza</h2>
              <h5 className="mb-4">Jr. Frontend Developer</h5>
              <p>Trying to be a competent person in solving coding problems</p>
              <div className="mt-5">
                <button className="primary__btn">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mohamad-reza-65879b220/"
                  >
                    LinkedIn
                  </a>
                </button>

                <button className="secondary__btn">
                  <Link
                    target={"_blank"}
                    href="https://drive.google.com/file/d/1irtyeRQ7beoHCKiZswG2ygVbmRZsVjtF/view?usp=sharing"
                  >
                    Download CV
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0"> ± 3 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
