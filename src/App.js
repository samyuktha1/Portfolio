import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills } from './components/Skiils';
import Projects from './components/Projects';
import Qualification from "./components/Qualification/Qualification"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Contact } from './components/Contact';
import Contact1 from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Qualification/>
    <Contact1/>
    </div>
  );
}

export default App;