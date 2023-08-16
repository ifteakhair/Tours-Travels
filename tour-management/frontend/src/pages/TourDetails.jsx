import React, { useEffect } from 'react';
import '../styles/tour-details.css'
import {Container, Row,Col,Form,ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import Booking from '../components/Booking/Booking';
import { BASE_URL } from '../utils/config';
import useFetch from '../hooks/useFetch';

const TourDetails = () => {
  const{id} =useParams()

  const {data:tour,loading,error} = useFetch(`${BASE_URL}/tours/${id}`)

  const{photo,title,desc,address,price,review,city,distance,maxGroupSize}=tour

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <section>
      <Container>
        {loading && <h5 className='text-center pt-5'>Loading......</h5>}
        {error && <h5 className='text-center pt-5'>{error}</h5>}

        {
          !loading && !error && <Row>
          <Col lg='8'>
            <div className='tour__content'>
              <img src={photo} alt=''/>
              <div className='tour__info'>
                <h2>{title}</h2>
                <div className='d-flex align-items-center gap-1'>
                  <span>
                    <i class='ri-map-pin-fill'></i>{address}
                  </span>  
                </div>
                <div className='tour__extra-details'>
                  <span><i className='ri-map-pin-2-line'></i>{city}</span>
                  <span><i className='ri-money-dollar-circle-line'></i>${price}/per person</span>
                  <span><i className='ri-group-line'></i>{maxGroupSize}</span>


                </div>
                <h5>Description</h5>
                <p>{desc}</p>

              </div>
            </div>
          </Col>
          <Col lg='4'>
            <Booking tour={tour}/>
          </Col>
        </Row>
        }
      </Container>
    </section>
  );
}

export default TourDetails;
