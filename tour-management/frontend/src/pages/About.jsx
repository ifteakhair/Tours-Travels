import React from 'react';
import {Container,Col,Row} from 'reactstrap'

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import gallery6 from '../assets/images/gallery6.jpg'
import Subtitle from '../shared/Subtitle';
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <div>
      <section>
        <Container>
        <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Row>
                <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle subtitle={'Know about us'}/>
                            <img src={worldImg} alt=''/>
                        </div>
                        <h1> 
                            We have the best cruise service in sundarban 
                         </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Inventore ex totam eaque labore voluptates, libero tenetur voluptas nulla vitae
                            impedit iure voluptatem modi. Possimus, beatae natus odit enim vel eos!
                        </p> 
                    </div>
                </Col>

                <Col lg='2'>
                    <div className='hero__img-box'>
                        <img src={heroImg} alt=''/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-4'>
                        <video src={heroVideo} alt='' controls/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-5'>
                        <img src={heroImg02} alt=''/>
                    </div>
                </Col>
                
            </Row>

            <Row className='pt-5'>
                <h2 className='pt-5'>Our Cruise Facilities</h2>
                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti perferendis, velit odio quasi architecto in voluptas magnam, quae quibusdam 
                    doloribus, quidem error dignissimos numquam blanditiis eum libero quaerat eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut totam qui voluptas, voluptates reiciendis cum modi nulla 
                    corrupti repudiandae porro repellat culpa placeat non doloribus voluptatem adipisci sed! Nostrum?</p>
            </Row>
            <Row><img src={gallery6} alt='' style={{height:"500px",objectFit:"cover"}}/></Row>
            
        </Container>
       
      </section>
    </div>
  );
}

export default About;
