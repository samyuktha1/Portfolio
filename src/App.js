import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skiils'; 
import Projects from './components/Projects';
import Qualification from './components/Qualification/Qualification';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './components/Testimonials/Testimonials';
import Contact1 from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import DidAgent from './components/Didagent';

function App() {
  <script
    type="module"
    src="https://agent.d-id.com/v1/index.js"
    data-name="did-agent"
    data-mode="fabio"
    data-client-key="Z29vZ2xlLW9hdXRoMnwxMDY3MTg2OTYwMDUyNDgwNDI4ODI6TlZGNXpMZFZuZy1nczhRd1NwMTZv"
    data-agent-id="agt_vRGSMO_x"
    data-monitor="true">
</script>

  return (
    <div className="App">
      <DidAgent/>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Qualification />
      <Testimonials />
      <Contact1 />
      <Footer />
    </div>
  );
}

export default App;
