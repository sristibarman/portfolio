import React ,{useRef} from "react";
import "./contact.css";
import fb from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import linkedIn from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pp5u1bg', 'template_yqmy81j', form.current, {
        publicKey: 'b_0XV0MpupvuYFmcS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent! ");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contactSec">
      <div id="contact">
        <h1>Contact Me</h1>
        <span className="contactMeSec">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm " ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name='your_name'/>
        <input type="email" className="email" placeholder="Your Email" email='your_email'/>
        <input type="number" className="phoneNo" placeholder="Your Phone Number"/>
        <textarea className="message" name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value='Send' className="subButton">Submit</button>
        </form>
        <div className="links">
        <a href="https://www.linkedin.com/in/sristi-barman-2b5845247/"><img src={linkedIn} alt="linledIn" className="links"></img></a>
            
          <a href="https://github.com/sristibarman?tab=repositories">
          <img src={github} alt="github" className="links"></img>
          </a>  
          <a href="https://www.instagram.com/"><img src={insta} alt="insta" className="links"></img>
          </a>
            <a href=""><img src={fb} alt="fb" className="links"></img></a>
            
        </div>
      </div>
    </section>
  );
}

export default Contact;
