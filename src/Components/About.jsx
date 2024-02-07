import React from "react";

// import image from "../images/new york.avif";

// const imageAltText = "purple and blue abstract background";

const description = `I am an experienced Mid-Level Software Engineer who has a Masters Of Science degree in Information Technology. 
  I have a strong background in back-end development with C# and .NET framework, 
  but more importantly I am a life-long learner who tries to be the best version of myself every single day.
  I am obsessed with solving problems and figuring out the how and more imporantly, the why!`;

const skillsList = [
  "API development",
  "Database design",
  "Back-end development",
  "Front-end development",
  "Design Patterns and Architecture",
  "Algorithms and Optimization",
  "Problem Solving",
  "Communication and growth facilitator",
];

const detailOrQuote = "The impediment to action advances action. What stands in the way becomes the way. \n - Marcus Aurelius";

const About = () => {
  return (
    <section className="padding" id="about">
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div
        style={{
          backgroundColor: "black",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", whiteSpace: "pre-line" }}>{detailOrQuote}</p>
      </div>
      <div className="section-border"></div>
    </section>
  );
};

export default About;
