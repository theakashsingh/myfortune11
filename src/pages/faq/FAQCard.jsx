/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
import {fadeIn} from "../../motionVariants"

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <motion.div 
    variants={fadeIn("up",0.1)}
    initial="hidden"
    whileInView={"show"}
     className="rounded-[1.25rem] shadow-sm bg-white text-[calc(1.325rem + .9vw)] font-normal">
      <button
        className="w-full text-left px-8 py-[1.2rem] flex justify-between items-center focus:outline-none text-[#032071]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium flex items-center gap-2">
          <BsQuestionDiamondFill /> {question}
        </span>
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span
              className={`absolute text-2xl font-bold transition-all duration-300 ease-in-out transform ${
                isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            >
              <FaPlus />
            </span>
            <span
              className={`absolute text-2xl font-bold transition-all duration-300 ease-in-out transform ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            >
              <FaMinus />
            </span>
          </div>
      </button>
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="px-5 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="px-4 py-5 border-t-[1px] border-solid border-t-[#4611A7]">
          {answer}
        </p>
      </div>
    </motion.div>
  );
};

export default FAQCard;
