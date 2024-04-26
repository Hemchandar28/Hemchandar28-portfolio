import {React, useEffect} from 'react';
import {
  FaDownload,
  FaGraduationCap,
  FaLaptopCode
} from "react-icons/fa";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import reactIcon from "../assets/react.png";
import gbIcon from "../assets/gb.jpg";
import javascriptIcon from "../assets/javascript.png";
import bootstrapIcon from "../assets/bootstrap.png";
import resume from "../assets/Hemchandar G.pdf"; 

function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <>
    <section className="about">
    <h1 className="heading">
      {" "}
      about <span> me </span>{" "}
    </h1>
    <div className="row">
      <div className="info-container">
        <h1> personal info </h1>
        <div className="box-container">
          <div className="box">
            <h3> <span> Name : </span>  Hemchandar </h3>
            <h3> <span> Age : </span> 24 </h3>
            <h3> <span> Email : </span> hemchandargajendran28@gmail.com</h3>
            <h3>
              {" "}
              <span> Address : </span>
               9, Kamalapattu street, Pazhaveli, Chengalpattu-603111{" "}
            </h3>
          </div>
          <div className="box">
            <h3> <span> Freelance : </span> Available </h3>
            <h3> <span> Skill : </span> Front-End Developer </h3>
            <h3> <span> Language : </span> Tamil, English </h3>
          </div>
        </div>
        <div className="aboutMeBtn">
          <a href={resume} download="HemchandarResume" target='_blank'  className="btnAbout" >
            {" "}
            Download CV{" "}
            <span>
              {" "}
              <FaDownload className="downloadBtnIcon" />{" "}
            </span>{" "}
          </a>
        </div>
      </div>
      <div className="count-container">
        <div className="box">
          <h3> 9 </h3>
          <p> Months Of Course and Learning Experience </p>
        </div>

        <div className="box">
          <h3> 10+ </h3>
          <p> Sample Projects and Tasks Completed </p>
        </div>

        <div className="box">
          <h3> 68 % </h3>
          <p> Percentage Scored in TCS NQT - IT </p>
        </div>

        
      </div>
    </div>
  </section>

  <section className="skills">
        <h1 className="heading"> <span> My </span> Skills </h1>
        <div className="box-container">
          <div className="box">
            <img src={htmlIcon} alt="htmlIcon"/>
            <h3> html </h3>
          </div>
          <div className="box">
            <img src={cssIcon} alt="cssIcon"/>
            <h3> css </h3>
          </div>
          <div className="box">
            <img src={javascriptIcon} alt="javascriptIcon"/>
            <h3> javascript </h3>
          </div>
          <div className="box">
            <img src={bootstrapIcon} alt="bootstrapIcon"/>
            <h3> bootstrap </h3>
          </div>
          <div className="box">
            <img src={reactIcon} alt="reactIcon"/>
            <h3> React </h3>
          </div>
          <div className="box">
            <img src={gbIcon} alt="htmlIcon"/>
            <h3> GitHub </h3>
          </div>

        </div>
      </section>

      <section className="education">
        <h1 className="heading"><span> my </span> education </h1>
        <div className="box-container"> 
          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span>Jun 2014 - Mar 2015 </span>
            <h3> ICSE </h3>
            <p> I scored 71% in the Indian Certificate of Secondary Education from Seventh-Day Adventist Matric Higher Secondary School Chengalpattu - 603111. </p>
          </div>

          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> Jun 2016 - Mar 2017 </span>
            <h3> HSC </h3>
            <p> I scored 65% in Higher Secondary Certificate from Seventh-Day Adventist Matric Higher Secondary School Chengalpattu - 603111.</p>
          </div>

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span> Aug 2017 - Mar 2021 </span>
            <h3> B.E (Electrical and Electronic Engineering) </h3>
            <p> I completed my Bachelors degree in the stream of Electrical and Electronic Engineering with 7.76 CGPA from SRM Valliammai Engineering College, Potheri,
              kattankulathur, chennai. </p>
          </div>

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span>Dec 2022 - May 2023 </span>
            <h3> Front-End Developer (Course) </h3>
            <p> I completed my Front-End Developer course from Login360 Velachery, Chennai, for a duration of 6 months. During the course duration I have completed many 
              tasks and projects.  </p>
          </div>

        </div>

      </section>
  </>
  )
}

export default About