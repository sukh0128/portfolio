"use client";

import React from "react";

const description = `I am an experienced Mid-Level Software Engineer who has a Masters Of Science degree in Information Technology. 
  I have a strong background in back-end development with C# and .NET framework, 
  but more importantly I am a life-long learner who tries to be the best version of myself every single day.
  I am obsessed with solving problems and figuring out the how and more imporantly, the why!`;

const skillsList = [
  "Problem Solving",
  "Database design",
  "API development",
  "Back-end development",
  "Front-end development",
  "Algorithms and Optimization",
  "Design Patterns and Architecture",
  "Communication and growth facilitator",
];

const detailOrQuote = "The impediment to action advances action. What stands in the way becomes the way. \n - Marcus Aurelius";

const About = () => {
  const sectionStyle = {
    position: 'relative' as const,
    width: '100%',
    padding: '0',
    paddingTop: '5px',
    paddingBottom: '2rem',
    backgroundColor: 'black',
    fontFamily: '"Montserrat", sans-serif',
    WebkitFontSmoothing: 'antialiased' as const,
    MozOsxFontSmoothing: 'grayscale' as const,
    // minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  };

  const containerStyle = {
    backgroundColor: 'black',
    width: '50%',
    margin: '1rem auto',
    textAlign: 'center' as const,
    color: '#ffffff',
    fontFamily: '"Montserrat", sans-serif',
    WebkitFontSmoothing: 'antialiased' as const,
    MozOsxFontSmoothing: 'grayscale' as const,
  };

  const h2Style = {
    fontSize: '3rem',
    fontWeight: 400,
    margin: 0,
    paddingTop: '5rem',
    paddingBottom: '2rem',
    color: '#ffffff',
    fontFamily: '"Montserrat", sans-serif',
    textAlign: 'center' as const,
  };

  const pStyle = {
    fontSize: '18px',
    lineHeight: 1.5,
    marginBottom: 0,
    fontWeight: 300,
    color: '#ffffff',
    fontFamily: '"Montserrat", sans-serif',
    paddingTop: '2rem',
  };

  const largePStyle = {
    fontSize: '24px',
    color: '#ffffff',
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1.5,
    fontWeight: 300,
  };

  const hrStyle = {
    margin: '2.5rem',
    borderColor: '#ffffff',
  };

  const skillsListStyle = {
    textAlign: 'left' as const,
    columns: 2,
    fontSize: '1.25rem',
    margin: '2rem 3rem',
    gap: '3rem',
    fontFamily: '"Montserrat", sans-serif',
    color: '#ffffff',
  };

  const borderStyle = {
    backgroundColor: 'white',
    width: '100%',
    height: '5px',
    margin: '0',
    padding: '0',
    position: 'absolute' as const,
    top: '0',
    left: '0',
    zIndex: 1000,
    display: 'block',
  };

  return (
    <>
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          .about-container {
            width: 100% !important;
            padding: 1.5rem !important;
          }

          .description, .detailOrQuote {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
            text-align: center !important;
          }

          .skillsList > li {
            width: 90% !important;
            margin-bottom: 1rem !important;
          }
        }

        @media only screen and (max-width: 580px) {
          .about-container {
            padding: 1rem !important;
          }

          .description, .detailOrQuote {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
            width: 95% !important;
            text-align: center !important;
            margin: 0 auto !important;
          }

          .skillsList {
            text-align: left !important;
            columns: 1 !important;
            font-size: 1.25rem !important;
            margin: 2rem 3rem !important;
            gap: 3rem !important;
          }

          .skillsList > li {
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            width: 100% !important;
          }
        }
      `}</style>
      <section style={sectionStyle} id="about">
        <div style={borderStyle}></div>
        <h2 style={h2Style}>About Myself</h2>
        <div style={containerStyle} className="about-container">
          <p style={largePStyle} className="description">{description}</p>
          <hr style={hrStyle} />
          <ul style={skillsListStyle} className="skillsList">
            {skillsList.map((skill) => (
              <li key={skill} style={{ color: '#ffffff', fontFamily: '"Montserrat", sans-serif', lineHeight: 1.7 }}>{skill}</li>
            ))}
          </ul>
          <hr style={hrStyle} />
          <p style={pStyle} className="detailOrQuote">{detailOrQuote}</p>
        </div>
      </section>
    </>
  );
};

export default About;
