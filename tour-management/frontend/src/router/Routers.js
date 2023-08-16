import React from 'react';
import {Routes, Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchReasultList from '../pages/SearchReasultList';
import Contacts from '../components/Contacts/Contacts';
import Blog from '../components/Blog/Blog';
import Payment from '../pages/Payment';
import About from '../pages/About';
import { Checkout } from '../components/react-bkash/Bkashpay';
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home'  element={<Home/>}/>
        <Route path='/tours'  element={<Tours/>}/>
        <Route path='/tours/:id'  element={<TourDetails/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/contacts'  element={<Contacts/>}/>
        <Route path='/tours/search'  element={<SearchReasultList/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/About' element={<About/>}/>

      </Routes>
    </div>
  );
}

export default Routers;
