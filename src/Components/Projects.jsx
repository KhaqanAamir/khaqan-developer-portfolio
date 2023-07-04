import React from "react";
import "../Style/Projects.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const Projects = () => {
  return (
    <div className="Projects-main-div">
      <h2 style={{fontSize:'2rem', fontWeight:'400'}}>My Projects</h2>
      <div className="Projects-flex-div">
        <MDBCard className="mdcard">
          <MDBCardImage
            className="mdimage"
            src="https://i.imgur.com/6zPfWg1.png"
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>DocRising (My FYP project)</MDBCardTitle>
            <MDBCardText>
              Online Doctor Appointment System using Mern Stack
            </MDBCardText>
            <MDBBtn href="https://github.com/KhaqanAamir/docrising-project">Click here to see code</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default Projects;
