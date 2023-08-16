import React,{useEffect} from 'react';
import './footer.css' 
import tour from '../../assets/images/tour.jpg';

import {FiChevronRight, FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:3000})
  } ,[])


const click =()=>{

  const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
      const message = `Error : ${res.status}`;
      throw new Error(message);
    }
    const data = await res.json();
    return data;
  };

  const sendData = () => {
      makeRequest("http://192.168.0.225:3000/addPackages", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    
    sendData();
    
    //const getData = () => {
      //makeRequest("127.0.0.1:3000")
        //.then((res) => console.log(res))
        //.catch((err) => console.log(err));
   // };
    
    //getData();
}


  return (
    <section className='footer mb-0'>
      <div className='videoDiv'>
        <img src={tour} alt=''/>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
            <button onClick={click} data-aos="fade-up" className='btnm flex' type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className="footerIntro flex">
            <div className="logiDiv">
            <Link to='/' className='logo flex'>
            
              
                <MdOutlineTravelExplore className="icon"/>
                Travel
              </Link>
            </div>

            <div data-aos="fade-up" className='footerParagraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae est, quos accusamus rem repellat adipisci eligendi minima laboriosam 
              dolores excepturi similique, unde id eius facere. Numquam, sint! Quo, enim?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>

            </div>
          </div>

          <div  className="footerLinks grid">
            
            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tripadvisor
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Losangeles
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Miami
              </li>
            </div>
           
            
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THERE THEME</small>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;