import React from 'react';
import '../Style/Education.css'

function Education() {
  return (
    <div className='Education-main-div'>
      <h1 style={{fontSize:'2.7rem', fontWeight:'400'}}>Education</h1><br /><br />
      <div className="school">
        <div className="Education-image-div">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Springfield_Public_School_and_College_Rawalpindi.png" alt="Spring Field School" />
        </div>
        <div className="Education-explaination-div">
          <h5>Spring Field Public School</h5>
          <h6>Matric in Computer Science</h6>
          <p>September 2014 - June 2016</p>
        </div>
      </div><br /><br /><hr /><br />
      <div className="school">
        <div className="Education-image-div">
          <img src="data:image/jpeg;base64,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" alt="Aslam Foundation College" />
        </div>
        <div className="Education-explaination-div">
          <h5>Aslam Foundation Model College</h5>
          <h6>Intermediate in Computer Science</h6>
          <p>August 2016 - July 2018</p>
        </div>
      </div><br /><hr /><br />
      <div className="school">
        <div className="Education-image-div">
          <img src="https://media-exp1.licdn.com/dms/image/C510BAQGDYKhRjfFvsw/company-logo_200_200/0/1582284790100?e=2147483647&v=beta&t=LTXGsxGYu2mLVKYfDOZyJGFan4BprdglmUAfxpGdI7Y" alt="Foundation University" />
        </div>
        <div className="Education-explaination-div">
          <h5>Foundation University Pakistan</h5>
          <h6>Bachelor's in Computer Science</h6>
          <p>September 2018 - continued</ p>
        </div>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default Education