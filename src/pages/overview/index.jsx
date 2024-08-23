import { useScroll } from "../scrollContext";
import overview from "./overview.json";

const Overview = () => {
  const { overviewRef } = useScroll();
  return (
    <section
      ref={overviewRef}
      className="w-full px-2.5 py-24 bg-overview bg-cover bg-blend-color bg-[#000000d1] text-white"
    >
      <div className="lg:max-w-5xl md:max-w-3xl sm:max-w-lg px-6 mx-auto">
        <h1 className="mb-10 -mt-8 text-red-600 font-bold text-center text-h1-heading">
          Play! Win! Repeat!
        </h1>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="text-h1-heading p-5">
            <span className="font-black text-blue-900 py-0 px-5 bg-[#ffffff94]">
              Play Hard, Win Big!
            </span>
            <br />
            <br />
            Secure Your Future with Skill-Based Gaming.
          </div>
          <div className="p-3">
            {overview.map((p, i) => (
              <p key={i} className="mb-2">{p.p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
