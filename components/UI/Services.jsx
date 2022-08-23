import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Grapich Design" icon="ri-brush-line" />

                <ServicesItem
                  title="UI UX Design From Scratch"
                  icon="ri-computer-line"
                />
              </div>

              <ServicesItem
                title="Front-End Web Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I Have " />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Make the display as attractive as possible to quickly attract
              customers and create a stunning experience
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
