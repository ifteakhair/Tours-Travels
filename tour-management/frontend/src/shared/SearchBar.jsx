import React from 'react';
import './search-bar.css'
import {Button, Col,Form,FormGroup} from 'reactstrap'
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return <Col lg='12'>
    <div className='search_bar'>
        <Form className='d-flex align-items-center for gap-4'>
            <FormGroup className='d-flex gap-5 mx-4 form__group form__group-fast'>
                
                <div>
                    <h6 className='text'>Startdate</h6>
                    <input type='date' />
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                
                <div>
                    <h6 className='text'>End Date</h6>
                    <input type='date'/>
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-last'>
            <Col><button className='btn primary__btn mx-4'>
                        <Link to='/tours'>Available Packages</Link>
                        
              </button></Col>
            </FormGroup>
        </Form>
    </div>
  </Col>
    
  
}

export default SearchBar;
