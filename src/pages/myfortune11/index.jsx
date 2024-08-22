import { useScroll } from "../scrollContext";

const MyFortune11 = () => {
  const {myFortune11Ref} = useScroll()
  return <div ref={myFortune11Ref} className="w-full h-80 border-2 border-black">MyFortune11</div>;
};

export default MyFortune11;
