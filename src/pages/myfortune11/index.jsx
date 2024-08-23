// import { useScroll } from "../scrollContext";
// import FortuneCard from "./fortuneCard";

// const MyFortune11 = () => {
//   const { myFortune11Ref } = useScroll();
//   return (
//     <div ref={myFortune11Ref} className="w-full py-12 bg-future11">
//       <div className="px-5">
//         <div>
//           <h1 className="text-h1-heading text-blue-900 font-black mb-4 mt-6 text-center">
//             Why <span className="text-red-700">MyFortune11?</span>
//           </h1>
//           <p className="text-[#878A9B] text-center">
//             Turn Every Game into a Winning Opportunity.
//           </p>
//         </div>
//         <div>
//           <FortuneCard image={"https://www.myfortune11.com/myfortune-img/ern.webp"} title={"title"}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyFortune11;

import { useScroll } from "../scrollContext";
import FortuneCard from "./fortuneCard";
import fortune11 from "./fortune11.json"

const MyFortune11 = () => {
  const { myFortune11Ref } = useScroll();


  return (
    <div ref={myFortune11Ref} className="w-full py-12 bg-future11">
      <div className="px-5">
        <div>
          <h1 className="text-h1-heading text-blue-900 font-black mb-4 mt-6 text-center">
            Why <span className="text-red-700">MyFortune11?</span>
          </h1>
          <p className="text-[#878A9B] text-center">
            Turn Every Game into a Winning Opportunity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {fortune11.map((card) => (
            <FortuneCard
              key={card.id}
              image={card.image}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFortune11;
