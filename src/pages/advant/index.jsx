import { useScroll } from "../scrollContext"
import advantJson from "./advant.json"

const Advant = () => {
  const {advantRef} = useScroll()
  return (
    <section ref={advantRef} className="w-full px-2.5 py-24 bg-overview bg-cover bg-blend-color bg-[#000000d1] text-white">
      <div className="lg:max-w-5xl md:max-w-3xl sm:max-w-lg px-6 mx-auto">
        <h1 className="mb-10 -mt-8 text-red-600 font-bold text-center text-h1-heading">PLAY SMART & WIN CRORES
        </h1>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-1/3 px-3">
            <img src={"https://www.myfortune11.com/myfortune-img/sport-removebg.png"} alt="" />
          </div>
          <div className="p-5 w-2/3">
          {advantJson.map((p, i) => (
              <p key={i} className="mb-[25px] text-[21px] text-white">{p.p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advant