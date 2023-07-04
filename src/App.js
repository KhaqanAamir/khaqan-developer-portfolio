import './App.css';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import Proficiency from './Components/Proficiency';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Certifications from './Components/Certifications';
import Projects from './Components/Projects';

function App() {

 
  return (
    <div >
    <NavBar/>

    {/* <div data-aos="zoom-in-up"> */}
    <Intro />
    {/* </div><br /><br /><br /> */}

    {/* <div data-aos="zoom-in-up"> */}
    <Experience/> <br />
    {/* </div> */}
    
    {/* <div data-aos="zoom-in-up"> */}
     <Proficiency/>
    {/* </div> */}

    {/* <div data-aos="zoom-in-up"> */}
    <Education/>
    {/* </div> */}

    {/* <div data-aos="zoom-in-up"> */}
    <Certifications/>
     {/* </div> */}
     <Projects/>
    </div>
  );
}

export default App;