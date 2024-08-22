import { useScroll } from "../scrollContext"

const Overview = () => {
  const {overviewRef} = useScroll()
  return (
    <div ref={overviewRef} className="w-full h-96 px-2.5 py-24 bg-overview bg-cover bg-blend-color bg-overviewColor text-white">Overview</div>
  )
}

export default Overview