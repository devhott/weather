import React, {  useState } from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBInputGroup,
  MDBRow,
  MDBTypography,
  MDBBtn
} from "mdb-react-ui-kit";

import Modal from 'react-modal'

import axios from'axios'

import WeatherModal from './WeatherModal';



function Searchbar({showDate,APIkey}) {
  Modal.setAppElement('#root');
    
    const apiKey=process.env.REACT_APP_API_KEY;
    const [city,setCity]=useState('')
    const [weatherdata, setWeatherdata] = useState(null)
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
      console.log(modalIsOpen);
    }
  
    const closeModal = () => {
      setIsOpen(false);
      console.log(modalIsOpen);
    }

    const customStyles = {
      content: {
        top: '40%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70%'
      },
    };
    
   
    const handleGetWeather = async () => {
      try  {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );
          setWeatherdata(response.data)
          if (response.data&& !modalIsOpen){
            openModal()
          }
      }
      catch(error){
        console.error(error);
        setIsOpen(true)
      }
    };
console.log(city);
console.log(weatherdata);


  return (
    <section className="vh-20">
    <MDBContainer className="h-100 py-5">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol md="8" lg="6" xl="4">
          <MDBTypography tag="h3" className="mb-4 pb-2 fw-normal">
            WeatherApp
          </MDBTypography>

          <MDBInputGroup className="mb-3">
            <input
              className="form-control rounded"
              value={city}
              type="text"
              placeholder="Enter your city"
              onChange={(e) =>setCity(e.target.value)}
            />
            <MDBBtn onClick={handleGetWeather} className='me-1'color='success'>
            {console.log(modalIsOpen)}
            
              <span
                className="input-group-text border-0 fw-bold"
                id="search-addon">
                Find!
              </span>
             {weatherdata?(
              <WeatherModal
              weatherdata={weatherdata}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              openModal={openModal}
              showDate={showDate}
              customStyles={customStyles}
              >

              </WeatherModal>
             ):
             (<Modal>
              <h1>Şehir bulunamadı</h1>
             </Modal>)
            }

              

            </MDBBtn>
           
            
          </MDBInputGroup>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default Searchbar