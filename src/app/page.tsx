"use client";
import Chatbox from "./components/Chatbox";
import Head from "./components/Head";
import Messagebar from "./components/Messagebar";
import { MessageProvider } from "./MessageContext";
import { motion } from "motion/react";
import TopBoxBar from "./components/TopBoxBar";
export default function Home() {
  return (
    <motion.div
      className="flex flex-col sm:justify-center items-center sm:h-9/10 w-full h-full"
    >
      <TopBoxBar />
      <div className="h-screen sm:h-[40rem] w-full flex flex-col text-xl bg-background shadow-2xl sm:rounded-b-3xl max-h-screen overflow-hidden">
        <MessageProvider>
          <div className="flex-shrink-0 p-4">
            <Head />
          </div>
          <div 
            className="flex-1 overflow-y-scroll px-4 pb-4"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#4a5568 #2d3748',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth',
              overscrollBehavior: 'auto',
              minHeight: 0, // Allow flex shrinking
              maxHeight: '100%', // Prevent growth beyond container
            }}
          >
            <Chatbox />
          </div>
          <div className="flex-shrink-0 p-4 pt-0">
            <Messagebar />
          </div>
        </MessageProvider>
      </div>
    </motion.div>
  );
}
