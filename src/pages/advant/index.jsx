import { useScroll } from "../scrollContext"

const Advant = () => {
  const {advantRef} = useScroll()
  return (
    <div ref={advantRef} className="w-full h-52 bg-overview bg-cover bg-blend-color bg-overviewColor text-white">Advant</div>
  )
}

export default Advant