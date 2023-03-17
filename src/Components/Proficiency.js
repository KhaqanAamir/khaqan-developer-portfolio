import React from 'react'
import '../Style/Proficiency.css'

function Proficiency() {
  return (
    <div className='proficiency-main-div'>
      <div className="proficiency-flex-div">
        <div className="proficiency-flex-left-div">
            <h1 style={{fontSize:'3rem', fontWeight:'400',flexBasis:'100%'}}>Proficiency</h1>
            <div className="skills">
                <div className="frontend">
                    <p>Frontend/Design</p>
                    <div className="meter">
                        <span style={{width:'90%'}}></span>
                    </div>
                </div>
                <div className="Backend">
                    <p>Backend</p>
                    <div className="meter">
                        <span style={{width:'80%'}}></span>
                    </div>
                </div>
                <div className="Programming">
                    <p>Programming</p>
                    <div className="meter">
                        <span style={{width:'65%'}}></span>
                    </div>
                </div>
            </div><br /><br /><br /><br />
        </div>
        <div className="proficiency-flex-right-div" style={{flexBasis:'37%'}}>
          <div className='container'>
          <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_qgllrmk3/data.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
          </div>
         </div>
      </div>  
    </div>

  )
}

export default Proficiency