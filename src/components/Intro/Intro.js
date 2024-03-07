import React from "react";
import cvPdf from "../../assets/Sristi Barman_CV.pdf"; // Assuming your CV is a PDF file
import { Link } from "react-scroll";
import bg from "../../assets/photo.jpg";
import "./intro.css";

const Intro = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPdf; // Provide the path to your CV file
    link.download = "Sristi_Barman_CV.pdf"; // You can customize the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="intro">
      <div className="introContainer">
        <div className="introContent">
          <span className="hello">Hello.</span>
          <p>
            <span className="introSpan">I am </span>
            <span className="introName">
              Sristi Barman - Frontend Developer
            </span>
          </p>
          <br />
          <p className="paraIntro">
            As an undergraduate student passionate about coding,
            I relish exploring new concepts and engaging in discussions.
          I thrive on exchanging ideas with others and delving into
            
            creative problem-solving to build innovative solutions. Let's
            connect and code together!
          </p>
          <button className="btnIntro" onClick={handleDownload}>
            Download CV
          </button>
        </div>
        <div className="imgContainer">
          <img src={bg} alt="profile" className="bg" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
