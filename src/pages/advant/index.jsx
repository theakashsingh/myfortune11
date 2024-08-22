import { useScroll } from "../scrollContext"

const Advant = () => {
  const {advantRef} = useScroll()
  return (
    <div ref={advantRef} className="w-full h-52 border-red border-2">Advant</div>
  )
}

export default Advant