"use client";
import Question from "./Question";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Message = ({
  question = "tell me about yourself",
  msg = "hello world!",
  scrollToBottom = () => {},
}) => {
  const [showResponse, setShowResponse] = useState(false);
  return (
    <div className="flex flex-col gap-3 text-2xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onAnimationComplete={() => {
          scrollToBottom();
          setShowResponse(!showResponse);
        }}
      >
        <Question question={question} />
      </motion.div>{" "}
      {showResponse && (
        <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                                .callFunction(() => scrollToBottom())
                .typeString(msg)
                .start()
                .callFunction(() => scrollToBottom());
            }}
            options={{
              delay: 10,
              cursor: "",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Message;
