import React from "react";
import PropTypes from "prop-types";

interface FooterProps {
  devDotTo?: string;
  email?: string;
  gitHub?: string;
  linkedIn?: string;
  name: string;
  primaryColor?: string;
}

const Footer = (props: FooterProps) => {
  const { devDotTo, email, gitHub, linkedIn, name, primaryColor } = props;

  const footerStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem 0 0.5rem",
    backgroundColor: primaryColor || 'black',
    width: "100%",
    fontFamily: '"Montserrat", sans-serif',
    WebkitFontSmoothing: 'antialiased' as const,
    MozOsxFontSmoothing: 'grayscale' as const,
  };

  const socialContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "2.5rem",
  };

  const socialIconStyle = {
    height: "30px",
    width: "30px",
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: '"Montserrat", sans-serif',
  };

  const pSmallStyle = {
    fontSize: '15px',
    color: '#ffffff',
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1.5,
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 300,
  };

  return (
    <div
      id="footer"
      style={footerStyle}
    >
      <div style={socialContainerStyle}>
        {email && (
          <a href={`mailto:${email}`} style={linkStyle}>
            <img src={"/portfolio/socials/envelope.svg"} alt="email" style={socialIconStyle} />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${"/portfolio/socials/devdotto.svg"}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src={"/portfolio/socials/devdotto.svg"} alt="Dev.to" style={socialIconStyle} />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src={"/portfolio/socials/github.svg"} alt="GitHub" style={socialIconStyle} />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <img src={"/portfolio/socials/linkedin.svg"} alt="LinkedIn" style={socialIconStyle} />
          </a>
        )}
      </div>
      <p style={pSmallStyle}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
};

export default Footer;
