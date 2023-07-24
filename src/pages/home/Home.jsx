import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>-I'm Jun Mark Prodigo. </span> <br />
            Web Designer
          </h1>

          <p className="home__description">
            I am a graduate of Bachelor of Science in Information Systems,
            specializing in web design. With expertise in front-end technologies
            and a keen eye for user-centered design, I create professional and
            visually appealing websites. Combining technical proficiency with a
            passion for exceptional user experiences, I am dedicated to
            delivering innovative web solutions that drive business growth.
          </p>

          <Link to="about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
