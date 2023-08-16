import React from 'react';


import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';
import  Navbar  from '../Header/Navbar';

const Layout = () => {
  return (<>
    <Navbar/>
    <Routers/>
    <Footer/>
    </>
  );
}

export default Layout;
