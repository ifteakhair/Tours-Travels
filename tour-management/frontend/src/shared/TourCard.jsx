import React, { useState, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';


import './tour-card.css';

const TourCard = ({ tour }) => {
  const { _id, title, photo, time, price,discountprice,address, offer} = tour;
  
  const {data:tours,loading,error} = useFetch(`${BASE_URL}/tours`)




  return (
    <div className='tour__card'>
      <Card>
        <div className='tour__img'>
          <img src={photo} alt='tour-img' />
          <span><h6>{price}BDT | <del>{discountprice}</del>/per person</h6></span>
          
        </div>

        <CardBody>

        <h5 className='tour__title card__top d-flex align-items-center '>
        <i className='ri-map-pin-line'></i><Link to={`/tours/${_id}`} className='tour__title'>{title}</Link>
          </h5>
          <div className='card__top d-flex align-items-center justify-content-between'>
            <span className='tour__location d-flex align-items-center gap-1 mb-2'>
            <i class="fas fa-clock"></i>
              {time}
            </span>
            
            </div>

          
          

          <p style={{fontSize:'12px'}}>`{address} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, accusamus quidem nostrum vero error eius laboriosam tempore  iste ut dolores cum veniam consequuntur? Laboriosam, neque optio.`</p>

          <div className='card__bottom d-flex align-items-center justify-content-end mt-3'>
            
            <button className='btn booking__btn'>
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
