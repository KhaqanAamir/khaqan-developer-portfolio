import React from 'react'

function Proficiency() {
  return (
    <div className='intro-main-div'>
      <div className="intro-flex-div">
        <div className="intro-flex-left-div">
            <h1 style={{fontSize:'70px;', fontWeight:'400'}}>Proficiency</h1>
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
            </div>
        </div>
        <div className="intro-flex-right-div" style={{flexBasis:'55%'}}>
          <div className='container'>
          <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_qgllrmk3/data.json"  background="transparent"  speed="1"  style={{width: '300px;', height: '300px;', position:'relative', top:'50px', left:'50px'}} loop  autoplay></lottie-player>
          </div>
         </div>
      </div>  
    </div>

  )
}

export default Proficiency