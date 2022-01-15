import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import menu from "./images/menu.svg";

const Navbar = () => {
  // const nav = [
  //   { href: "1", name: "name" },
  //   { href: "1", name: "name" },
  // ];
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 900) && (
        <div className="linksDiv">
          <a className="homeLink" onClick={() => scroll.scrollToTop()}>
            <button
              className="homeBtn"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              Home
            </button>
          </a>
          <Link
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            to="project"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Projects
          </Link>
          <Link
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            to="resume"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Resume
          </Link>

          <a
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            className="linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-omar-b4846522b/"
          >
            LinkedIn
          </a>
        </div>
      )}

      <a onClick={toggleNav} className="navBtn">
        <img src={menu}></img>
      </a>
    </nav>
  );
};

export default Navbar;
