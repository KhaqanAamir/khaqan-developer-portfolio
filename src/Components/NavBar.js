import React from 'react'
import '../Style/NavBar.css'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link';
import {motion} from 'framer-motion';

function NavBar() {

  const [rotate,setRotate]=React.useState(false)


  return (

    <BrowserRouter>
    
    <nav>
      <motion.div className="nav-left-side"  whileHover={{scale:1.5}} animate={{ scale:1, rotate:rotate?360:0}}  transition={{type:'spring', duration:3}} initial={{scale:0}} onClick={(e)=>{e.preventDefault();setRotate(!rotate)}}>
        <a href="/" className='logo'>
          <span style={{color:"grey"}}></span>
          <span className='navname' style={{color:"purple"}}>Khaqan Aamir</span>
          <span style={{color:"grey"}}></span>
        </a>
      </motion.div>
        
      <ul>
        <div className="nav-right-side">
          <motion.li whileHover={{scale:1.5}}><Link to='#opening'>Skills</Link></motion.li>
          <motion.li whileHover={{scale:1.5, margin:'0px 40px'}}><a href=".">Work Experiences</a></motion.li>
          <motion.li whileHover={{scale:1.5, margin:'0px 40px'}}><a href=".">Open Source</a></motion.li>
          <motion.li whileHover={{scale:1.5, margin:'0px 40px'}}><Link to='#certification'>Achievements</Link></motion.li>
          <motion.li whileHover={{scale:1.5, margin:'0px 8px'}}><a href=".">Blogs</a></motion.li>
          <motion.li whileHover={{scale:1.5, margin:'0px 8px'}}><a href=".">Talks</a></motion.li>
          <motion.li whileHover={{scale:1.5, margin:'0px 25px'}}><a href=".">Contact Me</a></motion.li>
        </div>
      </ul>
    </nav>
    </BrowserRouter>
  )
}

export default NavBar
