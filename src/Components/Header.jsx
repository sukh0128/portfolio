import React from "react";

const Header = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          background: "rgba(0,0,0)",
          padding: "1rem",
          top: 0,
          width: "100%",
          zIndex: 10,
          color: "white",
        }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#footer">Contact</a>
      </div>
      <div className="section-border"></div>
    </div>
  );
};

export default Header;
