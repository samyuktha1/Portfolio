import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills } from './components/Skiils';
import Projects from './components/Projects';
import Qualification from "./components/Qualification/Qualification"
import 'bootstrap/dist/css/bootstrap.min.css'
import Testimonials from "./components/Testimonials/Testimonials";
import Contact1 from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Qualification/>
    <Testimonials/>
    <Contact1/>
    <Footer/>
    </div>
  );
}

export default App;