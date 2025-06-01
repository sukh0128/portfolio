"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";
import Icon from "./Icon";

import { useState } from "react";
import { useMessage } from "../MessageContext";
import { FaArrowRight, FaUsers } from "react-icons/fa6";
import { useAnalytics } from "./Analytics";

const Messagebar = () => {
  const [showIcons, setShowIcons] = useState(true);
  const [currMsg, setCurrMsg] = useState("");
  const { messages, setMessages } = useMessage();
  const { trackChatMessage } = useAnalytics();

  const getResponse = async () => {
    try {
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? 'https://portfolio-1pdn6w25a-eric-tsendjavs-projects.vercel.app/api/chat'
        : '/api/chat';
        
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: currMsg }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.answer;
    } catch (error) {
      console.error('API Error:', error);
      return "Sorry, I'm having trouble responding right now. Please try again later or contact me directly!";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currMsg.trim()) {
      const answer = await getResponse();

      setMessages([...messages, { question: currMsg, answer: answer }]);
      trackChatMessage(currMsg);
    }
    setCurrMsg("");
  };
  return (
    <div className="flex w-full gap-2 text-2xl h-1/10">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          delay: 0.5,
          duration: 1,
        }}
        className="flex-1 hover:border-hubspot border-1 border-accent hover:border-2 transition hover:duration-300 ease-in-out flex justify-between items-center bg-dark dark:bg-accent rounded-lg p-1 h-16"
      >
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex items-center w-full rounded-lg text-lg sm:text-2xl">
            <input
              value={currMsg}
              className="px-4 focus:outline-none w-full mb-1"
              type="text"
              placeholder="ask me anything ..."
              onChange={(e) => setCurrMsg(e.target.value)}
            />
            <button
              type="submit"
              className="flex justify-center items-center w-11 h-10 hover:text-hubspot hover:duration-300 hover:scale-110  rounded-lg mr-1"
            >
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          delay: 0.8,
          duration: 0.5,
        }}
        className="border-1 border-accent flex justify-center flex-row items-center gap-1 rounded-lg h-16 bg-dark dark:bg-accent p-2 transition duration-300 overflow-hidden"
      >
        <motion.div
          className="flex"
          initial={{ width: "auto" }}
          animate={{ width: showIcons ? "auto" : "0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AnimatePresence>
            {showIcons && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ opacity: 0, x: 100 }}
                className="flex gap-1"
              >
                {" "}
                <motion.div initial={{ rotate: -360 }} exit={{ rotate: 90 }}>
                  <Icon link="https://www.linkedin.com/in/erdenesukh-tsendjav/">
                    <FaLinkedinIn />
                  </Icon>
                </motion.div>
                <motion.div initial={{ rotate: -360 }} exit={{ rotate: 90 }}>
                  <Icon link="https://github.com/sukh0128/">
                    <FaGithub />
                  </Icon>{" "}
                </motion.div>
                <motion.div initial={{ rotate: -360 }} exit={{ rotate: 90 }}>
                  <Icon link="mailto:erdenesukh@gmail.com">
                    <FaEnvelope />
                  </Icon>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          onClick={() => setShowIcons((prev) => !prev)}
          className="flex justify-center items-center font-bold w-10 h-10 text-xl font-sans text-background dark:text-foreground  rounded-lg bg-hubspot hover:scale-110 hover:duration-300"
        >

          <FaUsers />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Messagebar;
