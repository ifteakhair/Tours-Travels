import React,{useState} from 'react';
import './Booking.css'
import {Form,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap'

import { useNavigate } from 'react-router-dom';
import DatePickerExample from './DataPickerExample';
import ReactCalendar from './ReactCalender';
const Booking = ({tour}) => {

    const {price, reviews} =tour
    const navigate = useNavigate()

    const[credentials,setCredentials]=useState({
      userId:'01',
      userEmail:'example@gmail.com',
      fullName:'',
      phone:'',
      guestSize:1,
      bookAt:''
    })

    const handelChange=(e)=>{
      setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handelClick=(e)=>{
      e.preventDefault();
      console.log(credentials)
      navigate('/payment');
    }

    const serviceFee = 10
    const totalAmount = Number(price) *Number(credentials.guestSize)+Number(serviceFee)

  return (
    <div className='booking'>
      <div className='booking_top d-flex align-items-center justify-content-between'>
        <h3>${price}<span>/per person</span></h3>
      </div>

      <div className='booking__form'>
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handelClick}>
            <FormGroup>
                <input type='text' placeholder='Full Name' id='fullName'
                required onChange={handelChange}/>
            </FormGroup>
            <FormGroup>
                <input type='number' placeholder='Phone' id='Phone'
                required onChange={handelChange}/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <DatePickerExample/>
                <input type='number' placeholder='Guest' id='guestSize'
                required onChange={handelChange}/>
            </FormGroup>
        </Form>
      </div>
      <ReactCalendar/>

      <div className='booking__bottom'>
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>${price}<i className='ri-close-line'></i>1 person</h5>
                <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span>${totalAmount}</span>
            </ListGroupItem>
        </ListGroup>

        <Button className='btn primary__btn w-100 mt-4' onClick={handelClick}>Book Now</Button>
      </div>
    </div>
  );
}

export default Booking;
