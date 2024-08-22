import { useScroll } from "../scrollContext"

const HowToPlay = () => {
  const {howToPlayRef} = useScroll()
  return (
    <div ref={howToPlayRef} className="w-full h-52 border-black border-2">HowToPlay</div>
  )
}

export default HowToPlay