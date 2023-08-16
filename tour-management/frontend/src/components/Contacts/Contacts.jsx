import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import { contactConfig } from "./content.js"
import './contacts.css' 
import {Helmet} from "react-helmet";

const Contacts =()=> {

  const senddetails =()=>{

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
        makeRequest("http://192.168.0.100:3000", {
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
    }

  return (
    <section className='contacts'>

      
      
      <Container>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Contacts</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     
     <Row className="mb-5 mt-3">
       <Col lg="8">
         <h1 className="display-4 mb-4">Contact Us</h1>
         <hr className=" my-4 ml-0 text-left" />
       </Col>
     </Row>
     <Row className="sec_sp">
       <Col lg="5" className="mb-5">
         <h3 className="color_sec py-4">Get in touch</h3>
         <address>
           <strong>Email:</strong>{" "}
           <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
             {contactConfig.YOUR_EMAIL}
           </a>
           <br />
           <br />
           {contactConfig.hasOwnProperty("YOUR_FONE") ? (
             <p>
               <strong>Phone:</strong> {contactConfig.YOUR_FONE}
             </p>
           ) : (
             ""
           )}
         </address>
         <p>{contactConfig.description}</p>
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <form  className="contact__form w-100">
           <Row>
             <Col lg="6" className="form-group">
               <input
                 className="form-control"
                 id="name"
                 name="name"
                 placeholder="Name" 
                 type="text"
                 required 
               />
             </Col>
             <Col lg="6" className="form-group">
               <input
                 className="form-control rounded-0"
                 id="email"
                 name="email"
                 placeholder="Email"
                 type="email" 
                 required 
               />
             </Col>
           </Row>
           <textarea
             className="form-control rounded-0"
             id="message"
             name="message"
             placeholder="Message"
             rows="5" 
             required
           ></textarea>
           <br />
           <Row>
             <Col lg="12" className="form-group">
               <button onClick={senddetails} className="sendbtn ac_btn" type="submit"> 
               Send
               </button>
             </Col>
           </Row>
         </form>
       </Col>
     </Row>
   </Container>
      

    </section>
  );
}

export default Contacts;
