import React from "react";
import arrowSvg from "../../public/images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../../public/images/Eric.jpg";

const imageAltText = "Adult Man standing in front of a skyline at night.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "17rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 className="white">{name}</h1>
        <br></br>
        <h2 className="white">{title}</h2>
      </div>
      <div className="section-border"></div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
