import { useScroll } from "../scrollContext"

const HowToPlay = () => {
  const {howToPlayRef} = useScroll()
  return (
    <div ref={howToPlayRef} className="w-full h-52 bg-howToPlay bg-howToPlayColor, bg-blend-color bg-cover" >HowToPlay</div>
  )
}

export default HowToPlay