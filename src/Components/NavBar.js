import React from 'react'
import '../Style/NavBar.css'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link';

function NavBar() {


  return (

    <BrowserRouter>
    
    <nav>
      <div className="nav-left-side">
        <a href="/" className='logo'>
          <span style={{color:"grey"}}></span>
          <span className='navname' style={{color:"purple"}}>Khaqan Aamir</span>
          <span style={{color:"grey"}}></span>
        </a>
      </div>
        
      <ul>
        <div className="nav-right-side">
          <li><Link to='#opening'>Skills</Link></li>
          <li><a href=".">Work Experiences</a></li>
          <li><a href=".">Open Source</a></li>
          <li><Link to='#certification'>Achievements</Link></li>
          <li><a href=".">Blogs</a></li>
          <li><a href=".">Talks</a></li>
          <li><a href=".">Contact Me</a></li>
        </div>
      </ul>
    </nav>
    </BrowserRouter>
  )
}

export default NavBar
