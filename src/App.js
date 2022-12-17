import './App.css';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import Proficiency from './Components/Proficiency';
import Education from './Components/Education';

import Experience from './Components/Experience';
import Certifications from './Components/Certifications';

function App() {
  return (
    <>
    <NavBar/>
    <Intro/><br />
    <Experience/> <br />
    <Proficiency/>
    <Education/>
    <Certifications/>
    </>
  );
}

export default App;
