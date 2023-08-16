import React from 'react';
import '../styles/home.css'
import '../styles/demo.css'
import '../styles/style.css'
import socketIOClient from 'socket.io-client';
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';

import {useEffect,useState} from 'react';
import './home.css' 
import video1 from '../assets/images/video1.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Helmet} from "react-helmet";

const Home = () => {



    useEffect(()=>{
        Aos.init({duration:2000})
      } ,[])
  return (
    <>

      
    <section className='home'>
    <Helmet>
                <meta charSet="utf-8" />
                <title>ZNZ TRAVELS</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className='overlay'></div>
      <video src={video1} muted autoPlay loop type='video1/mp4'></video>
      

      <div className='homeContent container'>
        <div class="contenttext">
            
              <h3>See the world with your own two eyes</h3>
              <h1 className='padding'>Time<em>to</em>travel</h1>
             
              
        </div>
        
        <SearchBar/>
        
        <div data-aos="fade-up" className='homeFooterIcons flex'>
          <div className='rightIcons'>
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <SiTripadvisor className='icon'/>
          </div>

          <div className='LeftIcons'>
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>

        
              
      </div>
        
      </section> 
      
      <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle subtitle={'Know Before Choosing Us'}/>
                           
                        </div>
                        <h1>We provide the best service for your 
                            <span className="highlight" style={{color:'pink'}}> :Tour</span>
                         </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Inventore ex totam eaque labore voluptates, libero tenetur voluptas nulla vitae
                            impedit iure voluptatem modi. Possimus, beatae natus odit enim vel eos!
                        </p> 
                    </div>
                </Col>

                
                <Col lg='6'>
                    <div className='hero__img-box mt-2'>
                        <video src={heroVideo} alt='' controls/>
                    </div>
                </Col>
                
                
            </Row>
        </Container>
      </section>

      <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className='services__subtitle'>What we serve</h5>
                    <h2 className='service__title'>we offer our best services</h2>

                </Col>
                <ServiceList/>
            </Row>
        </Container>
      </section>

      <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className='featured__tour-title'>Our Special Offers</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
      <Subtitle subtitle={'Testimonial'}/>
    <h1 className='pb-5'>What our Customers think about us</h1>  
    <main>
    
    
  <section class="client pt-3 pb-5">
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
        <h1 class="display-3 fw-bold text-white">Testimonials</h1>
        <hr class="bg-white mb-4 mt-0 d-inline-block mx-auto" style={{width: '100px', height:"3px"}}/>
        <p class="p-text text-white">What our clients are saying</p> 
      </div>
    </div>
    <div class="row align-items-md-center text-white">
      <div class="col-lg-12 col-md-12 col-sm-12">
     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
             
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row p-4">
          <div class="t-card">
                <i class="fa fa-quote-left" aria-hidden="true"></i>
        <p class="lh-lg">CodeHim is one of the BEST developer websites that provide web designers and developers with a simple way to preview and download a variety of free code &amp; scripts.</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>
          <div class="row">                    
           <div class="col-sm-2 pt-3">
             <img src="https://source.unsplash.com/300x300/?girl" class="rounded-circle img-responsive img-fluid"/>
                        </div>                    
              <div class="col-sm-10">
            <div class="arrow-down d-none d-lg-block"></div>
             <h4><strong>Sunaina Samuel</strong></h4>
        <p class="testimonial_subtitle"><span>Associate Software Engineer</span><br/>
            <span>CodeHim</span>
                        </p>
                    </div>
                    </div>
                  </div>
                </div>
               <div class="carousel-item">
                   <div class="row p-4">
                    <div class="t-card">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                    <p class="lh-lg">Lorem Ipsum ist ein einfacher
                      Lorem Ipsum ist in der Industrie bereits der
                      perspiciatis unde omnis iste natus error sit
                      laudantium, totam rem aperiam, eaque ipsa quae
                      architecto beatae vitae dicta sunt </p>
           <i class="fa fa-quote-right" aria-hidden="true"></i><br/>
           </div>
        <div class="row">
         <div class="col-sm-2 pt-4">
   <img src="https://source.unsplash.com/300x300/?man" class="rounded-circle img-responsive img-fluid"/>
                        </div>
           <div class="col-sm-10">
            <div class="arrow-down d-none d-lg-block"></div>
             <h4><strong>Esther Zawadi</strong></h4>
        <p class="testimonial_subtitle"><span>
          digital strategist</span><br/>
          <span>Vaxa digital</span>
                </p>
                    </div>
                    </div>
                  </div>
                </div>
               <div class="carousel-item">
                   <div class="row p-4">
                    <div class="t-card">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                    <p class="lh-lg">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. 
                      Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text "Sed ut .</p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>
                    <div class="row text-lg-start">
                    <div class="col-sm-2 pt-4 align-items-center">
                        <img src="https://source.unsplash.com/300x300/?businessman" class="rounded-circle img-responsive img-fluid"/>
                        </div>
                        <div class="col-sm-10">
                          <div class="arrow-down d-none d-md-block"></div>
                        <h4><strong>Patrick muriungi</strong></h4>
                        <p class="testimonial_subtitle"><span>Web Technologist</span><br/>
                        <span>Vaxa digital</span>
                        </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="controls push-right">
                <a class="left fa fa-chevron-left text-white btn btn btn-outline-light" href="#carouselExampleCaptions"
                  data-bs-slide="prev"></a>
                <a class="right fa fa-chevron-right text-white btn btn btn-outline-light" href="#carouselExampleCaptions"
                  data-bs-slide="next"></a>
              </div>
        </div>
    </div>
  </div>
  
  </section>
     
 </main>
 </Container>
    </section>

      <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className='gallery__title'>Visit our tour gallery</h2>
                </Col>
                <Col lg="12">
                    <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
