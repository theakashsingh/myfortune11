/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../../motionVariants";

const FortuneCard = ({ image, title }) => {
  const phoneNumber = "916390010019";
  const message = "Hello! I would like to connect with you.";

  const handleClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink);
  };
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      className="overflow-hidden flex flex-col h-full"
    >
      <figure className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full aspect-[3/1.8] object-contain px-5 py-0 transition-transform transform hover:scale-110"
        />
      </figure>
      <div className="p-4 text-center flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <button
          onClick={handleClick}
          className="bg-[#032071] border-2 border-solid border-[#032071] font-semibold sm:min-w-[170px] min-w-full text-white py-2 px-4 rounded-full 
          relative hover:ring-2 hover:ring-red-500 hove:ring-opacity-50
          hover:shadow-[0_0_10px_5px_rgba(255,0,0,0.6)] transition-all"
        >
          Play Now
        </button>
      </div>
    </motion.div>
  );
};

export default FortuneCard;
