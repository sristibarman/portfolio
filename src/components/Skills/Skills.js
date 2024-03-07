import React from "react";
import "./skills.css";
import ui from "../../assets/ui-ux.png";
import programming from "../../assets/programming.png";
import web from "../../assets/web-design.png";
import cw from "../../assets/content_writing.png";

const Skills = () => {
  return (
    <section id="aboutSec">
      <span>
        <h2 className="mainHeading"> What I do</h2>
      </span>
      <p className="aboutPara">
        In the exciting realm of software development, I'm a passionate learner
        on a journey of discovery. Fueled by curiosity and a love for
        problem-solving, I eagerly embrace challenges. With each step, I aim to
        grow, contribute, and make a positive impact in this dynamic field.
      </p>
      <div className="skillBars">
        <div className="firstSkill">
          <img src={ui} alt="ui_ux" className="img"></img>
          <div className="aboutText">
            <h2 className="titleHeading">UI/UX</h2>
            <p>
              As a newcomer actively engaged in UI/UX projects, I'm excited to
              explore and learn more about crafting user-friendly designs.{" "}
            </p>
          </div>
        </div>
        <div className="secondSkill">
          <img src={web} alt="web" className="img"></img>
          <div className="aboutText">
            <h2 className="titleHeading">Frontend developer</h2>
            <p>
              {" "}
              Frontend development is where I dive into pixels and creativity.
              Building beautiful interfaces and smooth experiences is what
              excites me. It's like painting a digital masterpiece, with each
              line of code adding a new dimension to the user's journey.
            </p>
          </div>
        </div>
        <div className="thirdSkill">
          <img src={programming} alt="coding" className="img"></img>
          <div className="aboutText">
            <h2 className="titleHeading">Coding</h2>
            <p>
              I love coding. Whether it's solving puzzles or creating something
              new, I'm drawn to the thrill of writing code. It's a creative
              journey where each line brings ideas to life, making technology
              accessible and exciting. Coding isn't just a skill; it's my joy
              and passion.
            </p>
          </div>
        </div>
        <div className="thirdSkill">
          <img src={cw} alt="coding" className="img"></img>
          <div className="aboutText">
            <h2 className="titleHeading"> Content Writing</h2>
            <p>
              I simply love writing. Whether it's sharing thoughts or recounting
              experiences, words have an incredible ability to express ideas and
              emotions. Writing is my way of connecting with others and
              expressing myself creatively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
