import React from "react";

// import image from "../images/new york.avif";

// const imageAltText = "purple and blue abstract background";

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
  return (
    <section className="padding" id="about">
      <div className="about-container">
        <h2>About Myself</h2>
        <p className="large description">{description}</p>
        <hr />
        <ul className="skillsList">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="detailOrQuote">{detailOrQuote}</p>
      </div>
      <div className="section-border"></div>
    </section>
  );
};

export default About;
