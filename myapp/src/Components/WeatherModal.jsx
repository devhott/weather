import React from 'react'
import Modal from 'react-modal'

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBBtn
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';



function WeatherModal({showDate,weatherdata,modalIsOpen,openModal,closeModal,customStyles}) {
    

  return (
    <div>
         <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                >
                  <MDBContainer className="h-100">
      <MDBRow className="justify-content-center align-items-center d-flex">
        <MDBCol md="8" lg="6" xl="4">
        <Link to='/weatherdetail' className='card'/>
          <MDBCard style={{ color: "#4B515D", borderRadius: "35px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
            <MDBCardBody className="p-4">
              <div className="d-flex">
                <MDBTypography tag="h6" className="flex-grow-1">
                  {weatherdata.name}
                </MDBTypography>
                <MDBTypography tag="h6">{showDate}</MDBTypography>
              </div>

              <div className="d-flex flex-column text-center mt-5 mb-4">
                <MDBTypography
                  tag="h6"
                  className="display-4 mb-0 font-weight-bold"
                  style={{ color: "#1C2331" }}
                >
                  {" "}
                  {weatherdata.main.temp}{" "}
                </MDBTypography>
                {weatherdata?.weather[0]?.description?? 
                <span className="medium" style={{ color: "#868B94" }}>
                  {weatherdata.weather[0].description}
                </span>}
                
              </div>

              <div className="d-flex align-items-center">
                <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                  <div>
                    <MDBIcon
                      fas
                      icon="wind fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    {weatherdata?.wind?.speed?? <span className="ms-1"> {weatherdata.wind.speed} km/h</span>}
                   
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      icon="tint fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    <span className="ms-1"> {weatherdata.main.humidity}% </span>
                  </div>
                </div>
                <div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                    width="100px"
                  />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
    <MDBBtn onClick={closeModal} color='danger' className='me-1'>Close</MDBBtn>
 </Modal> 

    </div>
  )
}

export default WeatherModal