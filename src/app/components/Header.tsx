import React from "react";
const headerStyle = {
  fontSize: '2rem',
  fontWeight: 400,
  margin: 0,
  paddingTop: '1rem',
  color: '#ffffff',
  fontFamily: '"Montserrat", sans-serif',
};
const Header = () => {
  return (
    <div style={headerStyle}>
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
          fontSize: "1.5rem",
        }}
      >
        <a href="#header">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#footer">Contact</a>
      </div>
      <div className="section-border"></div>
    </div>
  );
};

export default Header;
