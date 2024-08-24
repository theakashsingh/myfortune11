// import { useScroll } from "../scrollContext";
// import HOPCard from "./HOPCard";

// const HowToPlay = () => {
//   const { howToPlayRef } = useScroll();
//   return (
//     <div
//       ref={howToPlayRef}
//       className="w-full bg-howToPlay bg-[#0000004a], bg-blend-color bg-cover py-12 mx-auto"
//     >
//       <div className="px-3">
//         <div className="text-center">
//           <h2 className="text-[40px] font-black text-white leading-tight mb-4 mt-6">
//             Getting Started with Fantasy Cricket on{" "}
//             <span className="text-[#dd1416]"> MyFortune11:</span>
//           </h2>
//           <p className="py-5 px-0 text-[#f8f9fa] text-center font-normal text-base leading-tight">
//             Fantasy sports let you create virtual teams of real athletes and earn points based on their performance.
//             <br />
//             Join one of the biggest cricket leagues on MyFortune11 and start winning today!
//           </p>
//         </div>
//         <div><HOPCard image={"https://www.myfortune11.com/myfortune-img/e1.png"} number={'1'}title={"title"} description={"description"}/></div>
//       </div>
//     </div>
//   );
// };

// export default HowToPlay;

import { useScroll } from "../scrollContext";
import HOPCard from "./HTPCard";
import HTPJson from "./howtoplay.json"

const HowToPlay = () => {
  const { howToPlayRef } = useScroll();
  return (
    <div
      ref={howToPlayRef}
      className="w-full bg-howToPlay bg-[#0000004a] bg-blend-color bg-cover py-12 mx-auto"
    >
      <div className="px-3 lg:max-w-5xl md:max-w-3xl sm:max-w-lg mx-auto">
        <div className="text-center">
          <h2 className="text-[40px] font-black text-white leading-tight mb-4 mt-6">
            Getting Started with Fantasy Cricket on{" "}
            <span className="text-[#dd1416]"> MyFortune11:</span>
          </h2>
          <p className="py-5 px-0 text-[#f8f9fa] text-center font-normal text-base leading-tight">
            Fantasy sports let you create virtual teams of real athletes and earn points based on their performance.
            <br />
            Join one of the biggest cricket leagues on MyFortune11 and start winning today!
          </p>
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
          <div className="rounded-full font-semibold px-12 text-base py-[0.375rem] bg-[#cf1416] text-white cursor-pointer inline-block">Get Started Now</div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
