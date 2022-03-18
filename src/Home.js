import React, { useEffect, useState } from "react";
import Image from "./images/img.svg";
import react from "./images/react.svg";
import java from "./images/javascript.svg";
import html from "./images/html.svg";
import css from "./images/css.svg";
import resume from "./images/resume.JPG";
import { Link } from "react-scroll";
import profile from "./images/prof.png";
import axios from "axios";
import ResumePdf from "./Resume.pdf";

const Home = () => {
  const [info, setInfo] = useState([]);
  const baseUrl = "https://bayut.p.rapidapi.com";

  useEffect(async (url) => {
    try {
      const response = await axios.get(baseUrl, {
        headers: {
          "x-rapidapi-host": "bayut.p.rapidapi.com",
          "x-rapidapi-key":
            "98477eeee0mshf7e2ebf5adab1a3p11e992jsnb4e9ff09b905",
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="homeDiv">
      <div className="page-one">
        <div className="intro">
          {/* <div className="circle"></div> */}
          <h1>
            Hello I’m
            <br></br> Mohamed Omar
          </h1>
          <p>
            I’m a web developer and I have experince with javascript and react.
            This is my portfolio website so please scroll down and look at my
            projects.
          </p>
          <div className="hireBtn">
            <Link
              className="btn"
              to="download"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Hire me!
            </Link>
          </div>
        </div>
        <div className="imgDiv">
          <img src={Image}></img>
        </div>
      </div>
      <div className="page-two">
        <div className="lineDiv"></div>
        <h1>Technologies</h1>
        <div className="logoDiv">
          <div className="react">
            <img src={react}></img>
            <h2>Reactjs</h2>
          </div>
          <div className="javascript">
            <img src={java}></img>
            <h2>JavaScript</h2>
          </div>
          <div className="html">
            <img src={html}></img>
            <h2>HTML</h2>
          </div>
          <div className="css">
            <img src={css}></img>
            <h2>CSS</h2>
          </div>
        </div>
        <div id="project" className="lineTwoDiv"></div>
        <h1>Projects</h1>
        <div className="projectsDiv">
          <div className="project">
            <a target="_blank" href="https://mohamedsmoothscroll.netlify.app/">
              <img src="https://d33wubrfki0l68.cloudfront.net/61df357fe955de35bf6e9e07/screenshot_2022-01-12-20-11-10-0000.png"></img>
            </a>
          </div>
          <div className="project">
            <a target="_blank" href="https://mohamed-ecommerce.netlify.app/">
              <img src="https://d33wubrfki0l68.cloudfront.net/61dcaf056c14a00007e6eeb6/screenshot_2022-01-10-22-12-51-0000.png"></img>
            </a>
          </div>
          <div className="project">
            <a target="_blank" href="https://mohamedtopanime-001.netlify.app/">
              <img src="https://d33wubrfki0l68.cloudfront.net/61dcabd3c259a91cf56f408d/screenshot_2022-01-10-21-58-49-0000.png"></img>
            </a>
          </div>
          <div className="project">
            <a target="_blank" href="#"></a>
          </div>
        </div>
        <div id="resume" className="lineThreeDiv"></div>
        <h1>Resume</h1>
        <div className="resumeDiv">
          <img src={resume}></img>
          <p id="download">
            Click{" "}
            <a target="_blank" href={ResumePdf}>
              here
            </a>{" "}
            to download the resume.
          </p>
        </div>
      </div>
      <footer>
        <div className="holder">
          <div className="circle">
            <a
              className="circleLink"
              target="_blank"
              href="https://github.com/Mohamedomar5961"
            >
              <img src={profile}></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
