import React from 'react';
import { Container } from "reactstrap";
import './Blog.css';
import { Carousel } from 'reactstrap';
import blog3 from '../../assets/images/blog3.jpg';
import blog1 from '../../assets/images/blog1.webp';
import blog2 from '../../assets/images/blog2.jpg';
import lake from '../../assets/images/lake.jpg';
import dearimages from '../../assets/images/dearimages.jpg';
import Karamjol from '../../assets/images/Karamjol.jpg';
import { Col, Row } from 'reactstrap';
import {Helmet} from "react-helmet";
const Blog = () => {


  return (
    <div className='Blog'>
      <Container className='Blogs' >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "http://example.com/blog/sundarban-the-largest-mangrove-forest"
            },
            "headline": "Sundarban The Largest Mangrove Forest",
            "description": "Unquestionably one of Bangladesh's most picturesque locations, the Sundarbans is also among its top tourism destinations...",
            "image": "http://mysite.com/blog-image.jpg",
            "author": {
              "@type": "Person",
              "name": "Your Name"
            },
            "datePublished": "2023-07-26",
            "dateModified": "2023-07-26",
            "publisher": {
              "@type": "Organization",
              "name": "ZNZ TRAVELS",
              "logo": {
                "@type": "ImageObject",
                "url": "LOGO.ico"
              }
            }
          })}
        </script>
      </Helmet>
      <div className='pb-5'>
   
    <div className='pt-5'>
      <h1>Sundarban The Largest Mangrove Forest</h1>
      <p>Unquestionably one of Bangladesh's most picturesque locations, the Sundarbans is also among its top tourism destinations. The largest mangrove forest in the world, it is densely populated with a wide variety of trees and species. The greatest time of year to visit this treasure trove of natural beauty is from October to March since the weather is ideal, not too hot with little danger of rain or storm. How do we get there, though, and what can we expect to see? You should use this article as a reference.Sundarbans is a beautiful tourist place where people come from all parts of the world and take some of their experiences by traveling to Sundarbans. Visitors understand a lot from their own experiences and perspective. We have planned some tips for visitors on how they can make their Sundarbans trip amazing and enjoyable. These tips will help you to enjoy the Sundarbans in the most satisfying and adventurous manner.<br/><br/>The three wildlife sanctuaries in the south cover an area of 139,700 ha and are considered core breeding areas for a number of endangered species. Situated in a unique bioclimatic zone within a typical geographical situation in the coastal region of the Bay of Bengal, it is a landmark of ancient heritage of mythological and historical events. Bestowed with magnificent scenic beauty and natural resources, it is internationally recognized for its high biodiversity of mangrove flora and fauna both on land and water </p>
    </div>
    </div>
    
    <Row className='pt-5 pb-4'>
      <Col lg='6'>
        <img src={blog2} alt=''/>
      </Col>
      <Col lg='6'>
        <div>
          <h2>A Long-Cherished Dream , The Sundarbans </h2>
          
          <p>Sundarbans is a beautiful tourist place where people come from all parts of the world and take some of their experiences by traveling to Sundarbans. Visitors understand a lot from their own experiences and perspective. We have planned some tips for visitors on how they can make their Sundarbans trip amazing and enjoyable. These tips will help you to enjoy the Sundarbans in the most satisfying and adventurous manner.</p>
          <p>Lorem ipsum dolor sit amet  Quia doloremque illo neque enim itaque erro it amet consectetur adipisicing elit. Cumque temporibus natus, vel expedita ab doloribus repudiandae nihil molestias ratione consequuntur corporisr maiores quaerat esse,  maxime!</p>
        </div>
      </Col>
    </Row>
    <Row className='pt-5'>
      <Col>
        <div >
          <h2>Animal Life Of Sundarban</h2>
          <p>Sundarban is the natural habitat of the world’s Royal Bengal Tiger and spotted Deer.Deer is very common in the Soundarbans. It is one of the most beautiful dear in the world. They like to live in flock. In a flock there are 10-25 deer live together. Mostly they live in grassy forest. The main enemy of them is Royal Bangle tiger, which is only found in the Sundarban.</p>
          <p>It the world biggest mangrove forest. In Bangladesh tourism, Sunderban plays the most vital role. A large number of foreigners come to Bangladesh every year only to visit this unique mangrove forest. Besides, local tourists also go to visit Sundarban every year.</p>
        </div>
      </Col>
      <Col lg='6'>
        <img src={dearimages} alt=''/>
      </Col>
    </Row>
    <Row className='pt-5 pb-4'>
      <Col lg='6'>
        <img src={lake} alt=''/>
      </Col>
      <Col lg='6'>
        <div>
          <h2>Sundarban Lake is an heritage spot.. </h2>
          <p>If you want to visit the largest mangrove forest in the world, you can enter the canal through the forest by boat. Visit the forest with the help of boat riding. You can enjoy the side view of the forest and also see the nearby animal. The animals and birds come to the riverside to drink water most of the time. You can enjoy a lot watching the animals on the riverside with the boat riding. Sometimes the most dangerous royal Bengal tiger comes to the riverside for searching food and rarely the swimming tiger is seen in the river.</p>
          <p>You can enjoy the enter Sundarban mangrove forest. In that forest enjoy the beauty of nature, some important places near the Sundarban and some parts of water bodies, and their cultural program.</p>
        </div>
      </Col>
    </Row>
    <Row className='pt-5'>
      <Col lg='6'>
        <div>
          <h2>Sundarban Karamjol.. </h2>
          <p>Karamjol is a forest station for the Rangers. Here you can see a dear breeding center. To visit Sunderban you need to go there with a guide and it is even better if you go there with a group. You can stay two/three days in Sunderban depending on your desire and requirements. One-day tour is not enough for Sundarban as you will not be able to see the nature in haste. For one-day tour you can go up to Karamjol and at a glance visit the outer portion of Sunderban forest areas.</p>
          <p>In your Sunderban tour you will be able to see a lots of verities birds (a heaven for the bird watchers), can watch the fishing in the river by the fishermen, if you wish you can ask your tour operator to give a stopover in the fishermen villages to watch their lifestyle, see lots of animals like monkeys, various types Dears, foxes,</p>
        </div>
      </Col>
      <Col lg='6'>
        <img src={Karamjol} alt=''/>
      </Col>
    </Row>
    </Container>
    </div>
  );
};

export default Blog;
