import { useScroll } from "../scrollContext";
import HOPCard from "./HTPCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../motionVariants";
import HTPJson from "./howtoplay.json";

const HowToPlay = () => {
  const { howToPlayRef } = useScroll();
  return (
    <div
      ref={howToPlayRef}
      className="w-full bg-howToPlay bg-[#0000004a] bg-blend-color bg-cover py-12 mx-auto"
    >
      <div className="px-3 lg:max-w-5xl md:max-w-3xl sm:max-w-lg mx-auto">
        <div className="text-center">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="text-[40px] font-black text-white leading-tight mb-4 mt-6"
          >
            Getting Started with Fantasy Cricket on{" "}
            <span className="text-[#dd1416]"> MyFortune11:</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="py-5 px-0 text-[#f8f9fa] text-center font-normal text-base leading-tight"
          >
            Fantasy sports let you create virtual teams of real athletes and
            earn points based on their performance.
            <br />
            Join one of the biggest cricket leagues on MyFortune11 and start
            winning today!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
          {HTPJson.map((hop, index) => (
            <HOPCard
              key={index}
              image={hop.image}
              number={hop.number}
              title={hop.title}
              description={hop.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="rounded-full font-semibold px-12 text-base py-[0.375rem] bg-[#cf1416] text-white cursor-pointer inline-block relative hover:ring-2 hover:bg-[#032071] hover:ring-white hove:ring-opacity-50
          hover:shadow-[0_0_10px_5px_rgba(255,0,0,0.6)] transition-all"
          >
            Get Started Now
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
