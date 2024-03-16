// import React from "react";
// import "./projects.css";
// import blog from "../../assets/blog.jpg";
// import weather from "../../assets/weather.jpg";
// import wp from "../../assets/whatsapp.jpeg";
// import rd from "../../assets/recommendation.jpg";

// const Project = () => {
//   return (
//     <section id="projectSection">
//       <span>
//         <h2 className="heading"> My Projects</h2>
//       </span>
//       <div className="firstProject">
//         <div className="one">
//           <a
//             href="https://github.com/sristibarman/blog_application/tree/master/blog_application"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={blog} alt="blog_web" className="imgProjectOne" />
//             <div className="overlay">
//               <i className="fab fa-github"></i>
//             </div>
//           </a>
//           <div className="projectText">
//             <span className="spanText">Blog Application</span>
//           </div>
//         </div>
//         <div className="two">
//           <a
//             href="https://github.com/sristibarman/weather_app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={weather} alt="weather_web" className="imgProjectTwo"></img>
//             <div className="overlay">
//               <i className="fab fa-github"></i>
//             </div>
//           </a>

//           <div className="projectText">
//             <span className="spanText">Weather App</span>
//           </div>
//         </div>
//       </div>
//       <div className="secondProject">
//         <div className="three">
//           <a
//             href="https://github.com/sristibarman/whatsapp-chat-analysis"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={wp} alt="blog_web" className="imgProjectThree"></img>
//             <div className="overlay">
//               <i className="fab fa-github"></i>
//             </div>
//           </a>

//           <div className="projectText">
//             <span className="spanText"> Whatsapp Chat Analyzer</span>
//           </div>
//         </div>
//         <div className="four">
//           <a
//             href="https://github.com/sristibarman/book-recommeder-system"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={rd} alt="blog_web" className="imgProjectFour"></img>
//             <div className="overlay">
//               <i className="fab fa-github"></i>
//             </div>
//           </a>

//           <div className="projectText">
//             <span className="spanText"> Book Recommendation System</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;

import React from "react";
import "./projects.css";
import blog from "../../assets/blog.jpg";
import weather from "../../assets/weather.jpg";
import wp from "../../assets/whatsapp.jpeg";
import rd from "../../assets/recommendation.jpg";

const Project = () => {
  return (
    <section id="projectSec">
      <span>
        <h2 className="heading"> My Projects</h2>
      </span>
      <div className="firstProject">
        <div className="one">
          <a
            href="https://github.com/sristibarman/blog_application/tree/master/blog_application"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blog} alt="blog_web" className="imgProjectOne" />
            <div className="overlay">
              <i className="fab fa-github"></i>
            </div>
          </a>
          <div className="projectText">
            <span>Blog Application</span>
          </div>
        </div>
        <div className="two">
          <a
            href="https://github.com/sristibarman/weather_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weather} alt="weather_web" className="imgProjectTwo"></img>
            <div className="overlay">
              <i className="fab fa-github"></i>
            </div>
          </a>

          <div className="projectText">
            <span>Weather App</span>
          </div>
        </div>
      </div>
      <div className="secondProject">
        <div className="three">
          <a href="https://github.com/sristibarman/whatsapp-chat-analysis"  target="_blank"
          rel="noopener noreferrer">
            <img src={wp} alt="blog_web" className="imgProjectThree"></img>
            <div className="overlay">
              <i className="fab fa-github"></i>
            </div>
          </a>

          <div className="projectText">
            <span> Whatsapp Chat Analyzer</span>
          </div>
        </div>
        <div className="four">
          <a href="https://github.com/sristibarman/book-recommeder-system"  target="_blank"
          rel="noopener noreferrer">
            <img src={rd} alt="blog_web" className="imgProjectFour"></img>
            <div className="overlay">
              <i className="fab fa-github"></i>
            </div>
          </a>

          <div className="projectText">
            <span> Book recommendation System</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

