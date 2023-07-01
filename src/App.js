import './App.css';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import Proficiency from './Components/Proficiency';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Certifications from './Components/Certifications';

function App() {

  // // const entry= entries[0];
  // //     setElementVisible(entry.isIntersecting)
  // const myRef=useRef();
  // // const [isElementVisible, setElementVisible]=useState(null);

  // useEffect(()=>{
  //   const observer=new IntersectionObserver(entry=>{
  //     if(!entry.isIntersecting){
  //       return(observer)
  //     }
  //   })

  //   observer.observe(myRef.current)

  // },[myRef])


 
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
    </div>
  );
}

export default App;