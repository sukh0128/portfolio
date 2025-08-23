"use client";
import React from "react";
import Time from "./Time";
import { motion } from "motion/react";

const Head = () => {
  return (
    <div className="styles.headContainer text-sm sm:text-lg flex flex-col w-full justify-end flex-1">
      <div className="flex items-center gap-4 h-36 sm:mb-3">
        <div className="relative flex justify-center items-center w-1/3">
          <motion.div
            initial={{ y: -2000, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: "spring",
              ease: "easeInOut",
              duration: 1,
              delay: 0.5,
            }}
          >
            <img
              src="profilepic.jpg"
              alt="profile picture of Eric Tsendjav"
              className="hover:border-hubspot border-2 border-accent transition hover:duration-300 ease-in-out  w-24 h-24 sm:w-40 sm:h-40 rounded-full shadow-2xl  object-cover "
            />
          </motion.div>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <div className="flex sm:flex-row flex-col text-xl sm:text-5xl font-semibold sm:gap-4 sm:mb-4">
            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                ease: "easeInOut",
                delay: 0,
                duration: 1,
              }}
            >
              hello, i&apos;m{" "}
            </motion.div>

            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                ease: "easeInOut",
                delay: 0.2,
                duration: 1,
              }}
              className="text-5xl font-black"
            >
              Eric<span className="font-semibold">.</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 2000, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "spring",
              ease: "easeInOut",
              delay: 0.4,
              duration: 1,
            }}
            className="hover:border-hubspot border-2 border-accent transition hover:duration-300 ease-in-out  hidden sm:block bg-dark p-3 rounded-lg shadow-2xl"
          >
            <h2 className="flex items-center gap-1">
              ↳ Software Engineer @
              <span className="text-yellow-400 font-bold">Amazon</span>
            </h2>
            <h2 className="flex items-center gap-1">
              ↳ Master of Science from
              <span className="text-yellow-400 font-bold">MNSU, Mankato</span>
            </h2>
          </motion.div>
        </div>
      </div>{" "}
      {/* mobile version */}
      <div className="sm:hidden hover:border-hubspot border-2 border-accent transition hover:duration-300 ease-in-out bg-dark p-3 rounded-lg shadow-2xl">
        <h2 className="flex items-center gap-1">
          ↳ Software Engineer @
          <span className="text-yellow-400 font-bold">Amazon</span>
        </h2>{" "}
        <h2 className="flex items-center gap-1">
          ↳ Master of Science from
          <span className="text-yellow-400 font-bold">MNSU, Mankato</span>
        </h2>{" "}
      </div>
      <Time />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          delay: 1.5,
          duration: 1,
        }}
        className="mt-3 w-full bg-accent h-0.5 rounded-full shadow-3xl "
      />
    </div>
  );
};

export default Head;
