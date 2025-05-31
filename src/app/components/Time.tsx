"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Time = () => {
  const [index, setIndex] = useState(0);

  const strings = [
    "↳ I wanted to become a doctor, a brain surgeon specifically growing up, but somehow became a software engineer",
    "↳ I dislocated my shoulder and clavicle during MMA training",
    "↳ I used to be an avid DOTA (WarCraft 3 Frozen Throne) gamer",
    "↳ I barely leave my apartment more than once a week... :(",
    "↳ My favorite course ever was Data Structures and Algorithms",
    "↳ I am Mongolian by birth, but have been living in the US for the past 11+ years",
    "↳ I can fight and wrestle, but I am not good at either",
    "↳ favourite tv show ever? Definitely FMA Alchemist or X-Files",
    "↳ favourite movie ever? Goodfellas, I can watch it all day long for the rest of my life",
  ];

  useEffect(() => {
    const fadeInInterval = setInterval(
      () => setIndex((prev) => (prev + 1) % strings.length),
      4000
    );

    return () => {
      clearInterval(fadeInInterval);
    };
  }, [strings.length]);

  return (
    <motion.div
      initial={{ x: -2000, scale: 0 }}
      animate={{ x: 0, scale: 1 }}
      transition={{
        type: "spring",
        ease: "easeInOut",
        delay: 0.6,
        duration: 1,
      }}
      className="hover:border-hubspot border-2 border-accent transition hover:duration-300 ease-in-out  bg-dark rounded-lg flex justify-between items-center w-full h-20 px-4 py-6 mt-2"
    >
      <div className="flex w-full items-center gap-2">
        <img
          src="snoopyicon.png"
          alt="Snoopy icon"
          className="hidden dark:sm:block w-16"
        />
        <img
          src="snoopydark.png"
          alt="Snoopy dark theme icon"
          className="hidden sm:block sm:dark:hidden w-16"
        />
        <div className="flex flex-col">
          <h1 className="text-xs sm:text-sm font-semibold">
            here are some fun facts about me :{")"}
          </h1>

          <motion.div
            className="text-sm sm:text-lg font-black"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {strings[index]}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Time;
