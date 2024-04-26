import {React, useEffect, useRef } from 'react';
import {
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaThumbsUp
} from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Contact() {

  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

   //Convert the first letter into the Caps
    const userNameFirstLetter = e.target[0].value.charAt(0).toUpperCase() + e.target[0].value.slice(1);
    e.target[0].value = userNameFirstLetter;

    if((e.target[0].value && e.target[2].value && e.target[3].value && e.target[4].value) === "") {
      toast.warn(<p className='toastMessageStyle'> Please  Fill ✍️ All The 
      Fields , Thank You 👍 </p>);
      return
    }
      
  // Sending Email using emailjs library ........
    emailjs.sendForm('service_6thjpto', 'template_g1kvq33', form.current, 'OlgNRHS_h3AHWEr9u')
      .then((result) => {
        console.log(result.text);
        // toast.success(<p className='toastMessageStyle'> Thank You 🚀😊🤝 , i will contact 
        // to you ASAP ✌️👍  </p>);
      }, (error) => {
          console.log(error.text);
          toast.error(<p className='toastMessageStyle'> {error.text} </p>);
      });

      toast.success(<p className='toastMessageStyle'> Thank You 🤝 , i will contact 
      to you ASAP ✌️  </p>);

      e.target.reset();
  };

  return (
    <>
      <section className="contact">
        <h1 className="heading"> contact  <span> me </span></h1>
        <div className="row">
          <div className="info-container">
            <h1> Get In Touch </h1>
            <p> If you want to get in touch with me, the best way is to send me an email at the below email Id. I check my 
            email regularly, and I'll get back to you as soon as possible. </p>
            <div className="box-container">

              <div className="box">
                <i> <FaMapMarkedAlt/> </i>
                <div className="info">
                  <h3> Address </h3>
                  <p> 9 Kamalapattu Street, pazhaveli, Chengalpattu - 603111. </p>
                </div>
              </div>

              <div className="box">
                <i> <FaEnvelope/> </i>
                <div className="info">
                  <h3> Email </h3>
                  <p> hemchandargajendran28@gmail.com </p>
                </div>
              </div>

              <div className="box">
                <i> <FaPhone/> </i>
                <div className="info">
                  <h3> Number </h3>
                  <p> +91-638-105-6991 </p>
                </div>
              </div>

            </div>

            <div className="share">
              <a href="https://www.facebook.com/hemchandarpraveen28/" target="_blank"> <FaFacebook className="mediaIcons"/> </a>
              <a href="https://twitter.com/g_hem28" target="_blank"> <FaTwitter className="mediaIcons"/> </a>
              <a href="https://instagram.com/hemchandar28?igshid=ZGUzMzM3NWJiOQ==" target="_blank"> <FaInstagram className="mediaIcons"/> </a>
              <a href="https://www.linkedin.com/in/hemchandar-gajendran-8a65b0252" target="_blank"> <FaLinkedin className="mediaIcons"/> </a>
              <a href="https://github.com/Hemchandar28" target="_blank"> <FaGithub className="mediaIcons"/> </a>
            </div>

          </div>
          
          <form ref={form} onSubmit={sendEmail}>

            <div className="inputBox">
              <input type="text" name="from_name" placeholder="your name" />
              <input type="number" name="mobile_no" placeholder="your number"/>
            </div>

            <div className="inputBox">
              <input type="email" name="from_email" placeholder="your email"/>
              <input type="text" name="subject" placeholder="your subject"/>
            </div>

            <textarea name="message"  placeholder="your message" id="" cols="30" rows="10" />

            <input type="submit" value="Send Message" className="btn" />

          </form>

        </div>

      </section>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" 
      />
    </>
  )
}

export default Contact