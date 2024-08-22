import { useScroll } from "../scrollContext"

const Features = () => {
  const {featuresRef} = useScroll()
  return (
    <div ref={featuresRef} className="w-full h-52 border-2 border-grey">Features</div>
  )
}

export default Features