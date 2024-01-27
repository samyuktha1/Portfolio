import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedin from '../assests/images/linkedin.png'
import github from '../assests/images/github.svg'
import resume from '../assests/images/resume.png'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Check if window is defined to avoid the error
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
    };

      window.addEventListener('scroll', onScroll);

    // Remove the event listener when the component is unmounted
    return () => {
        window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="logo">
            <div className='logo'>
          SAMUKTHA NACHAM
          </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/nacham-samuktha-77aa83148/"><img src={linkedin} alt="" /></a>
                <a href="#"><img src={github} alt=""  /></a>
                <a href="https://drive.google.com/file/d/1xvcVQIn-KercImg-qAHigeC1tVFfMJFX/view?usp=sharing"><img src={resume} alt="" /></a>
              </div>
                <button className="vvd"><span>Let’s Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
