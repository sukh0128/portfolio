"use client";
import Question from "./Question";
import Typewriter from "typewriter-effect";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Message from "./Message";
/**
 * Chatbox component that displays a conversation interface
 * with questions and answers in a scrollable container
 */

import { useMessage } from "../MessageContext";
const Chatbox = () => {
  const { messages } = useMessage();

  const [currSection, setCurrSection] = useState(-1);
  const [showResponse, setShowResponse] = useState(0);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      // Try multiple approaches for maximum iOS Safari compatibility
      
      // Method 1: Direct parent container scroll
      const parentContainer = bottomRef.current?.parentElement?.parentElement;
      if (parentContainer) {
        parentContainer.scrollTop = parentContainer.scrollHeight;
      }
      
      // Method 2: Find scroll container by traversing up
      let element = bottomRef.current?.parentElement;
      while (element) {
        if (element.classList.contains('overflow-y-scroll')) {
          element.scrollTop = element.scrollHeight;
          break;
        }
        element = element.parentElement;
      }
      
      // Method 3: Force scrollIntoView with different options for iOS
      if (bottomRef.current) {
        try {
          bottomRef.current.scrollIntoView({ 
            behavior: "auto",
            block: "end",
            inline: "nearest"
          });
        } catch (e) {
          // If modern scrollIntoView fails, use basic version
          bottomRef.current.scrollIntoView(false);
        }
      }
    }, 150); // Slightly longer delay for iOS
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    const waitBeforeChat = setTimeout(() => setCurrSection(0), 2500);
    return () => clearTimeout(waitBeforeChat);
  }, []);

  return (
    <div>
      <div>
        {/* ===== INTRODUCTION SECTION ===== */}

        {currSection >= 0 && (
          <div className="flex flex-col gap-3">
            <div className="py-3" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="tell me about yourself" />
            </motion.div>{" "}
            {showResponse >= 1 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `Hello! I'm Eric Tsendjav. I am a Software Engineer at Amazon in Denver, CO. I am a Master of Science in Information Technology from Minnesota State University, Mankato and I am pretty good at Data Structrues and Algorithms, System Design, and just being a software engineer!`
                      )
                      .start()
                      .callFunction(() => {
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== WORK EXPERIENCE SECTION ===== */}
        {currSection >= 2 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="where have you worked before?" />
            </motion.div>

            {showResponse >= 3 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out text-lg ">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        '<span class="font-black text-xl text-center py-0.5 rounded-lg">Weehooey</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Oct 2023 - Jan 2024</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Information Technology Intern</span>'
                      )
                      .typeString(
                        '<br><span class="font-black text-xl text-center py-0.5 rounded-lg">1000 Islands Gan. Chamber</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Jun 2024 – Sep 2024</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Web/Graphic Intern</span>'
                      )
                      .typeString(
                        '<br><span class="font-black text-xl text-center py-0.5 rounded-lg">PetMap</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Dec 2024 – Mar 2025</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Software Engineer</span>'
                      )
                      .typeString(
                        '<br><span class="font-black text-xl text-center py-0.5 rounded-lg">3Tenets Consulting</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Jan 2025 – Present</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Full Stack Developer</span>'
                      )
                      .typeString(
                        '<br><span class="font-black text-xl text-center py-0.5 rounded-lg">Bridgewell Financial</span><span class="ml-2 text-xs font-sans italic rounded-2xl">Feb 2025 – Apr 2025</span><br /><span class="bg-dark font-bold border-1 px-2 text-center py-0.5 rounded-lg">Software Engineering Intern</span>'
                      )
                      .start()
                      .callFunction(() => {
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== PROJECTS SECTION ===== */}
        {currSection >= 3 && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="Do you work on any projects outside of work?" />
            </motion.div>

            {showResponse >= 4 && (
              <div>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        'Look around my github at <a href="https://github.com/sukh0128" target="_blank" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg"></a>.'
                      )
                      .start()
                      .callFunction(() => {
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}
        {/* ===== CONTACT INFORMATION SECTION ===== */}
        {currSection >= 4 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="how can i contact you?" />
            </motion.div>

            {showResponse >= 5 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        'you can reach me at <a href="mailto:erdenesukh@gmail.com" class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">erdenesukh@gmail.com</a>, or connect/send me a message on <a href="https://www.linkedin.com/in/erdenesukh-tsendjav/" target="_blank"  class="italic bg-dark border-1 px-1 py-0.5 rounded-lg">linkedin</a>.'
                      )
                      .start()
                      .callFunction(() => {
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ===== CONTACT INFORMATION SECTION ===== */}
        {currSection >= 5 && (
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onAnimationComplete={() => {
                setShowResponse(showResponse + 1);
              }}
            >
              <Question question="i want to ask you more questions tho ..." />
            </motion.div>

            {showResponse >= 6 && (
              <div className="hover:shadow-2xl hover:p-4 hover:bg-dark rounded-2xl transition-all duration-300 ease-in-out">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("sure, fire away below :) ")
                      .start()
                      .callFunction(() => {
                        setCurrSection(currSection + 1);
                      });
                  }}
                  options={{
                    delay: 2,
                    cursor: "",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {messages &&
          messages.map(
            (
              { question, answer }: { question: string; answer: string },
              index: number
            ) => {
              return (
                <Message
                  question={question}
                  msg={answer}
                  key={index}
                  scrollToBottom={scrollToBottom}
                />
              );
            }
          )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Chatbox;