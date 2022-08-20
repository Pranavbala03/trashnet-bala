import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Code from "../components/CodeEditor";
import GitHubButton from 'react-github-btn';

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";
import CryptoCapableLogo from "../assets/img/crypto-capable-logo.png";
import DSTLogo from "../assets/img/dst-logo.jpg";
import IndiaAccLogo from "../assets/img/india-accelerator-logo.png";
import NearLogo from "../assets/img/near-logo.png";
import SineLogo from "../assets/img/sine-iitb-logo.png";

import pages from "../data/pages";
import features from "../data/features";

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
       
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            {/* <Image src={ReactHero} /> */}
            <span className="ms-2 brand-text d-none d-md-inline">Trashnet</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            
            {/* <Button as={HashLink} to="#download" variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button> */}
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">Making Net Zero a Reality</h1>
              {/* <p className="text-muted fw-light mb-5 h5">Open source powered by React.js and Bootstrap 5</p> */}
              <div className="d-flex align-items-center justify-content-center">

              <Button variant="secondary" as={Link} to={Routes.Signin.path} className="text-dark me-3">
                  Login 
                </Button>

                {/* <Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
                  Explore ledger <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button> */}
                
              </div>
             
            </Col>
          </Row>
          {/* <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure> */}
        </Container>
      </section>
      <div className="section pt-0">
       
      </div>
       
{/*     
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
           
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
          
          </Row>
        </Container>
      </footer> */}
    </>
  );
};
