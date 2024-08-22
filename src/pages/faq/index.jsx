import { useScroll } from "../scrollContext"

const FAQ = () => {
  const {faqRef} = useScroll()
  return (
    <div ref={faqRef} className="w-full h-80 border-2 border-red">FAQ</div>
  )
}

export default FAQ