import { useScroll } from "../scrollContext"

const Overview = () => {
  const {overviewRef} = useScroll()
  return (
    <div ref={overviewRef} className="w-full h-96 border-2 border-red-700">Overview</div>
  )
}

export default Overview