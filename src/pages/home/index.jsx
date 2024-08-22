import { useScroll } from "../scrollContext";
import Carousel from "./Carousel";

const Home = () => {
  const {homeRef} = useScroll();
  const slides = [
    {
      image: "https://www.myfortune11.com/myfortune-img/banner4.png",
      title: "title1",
    },
    {
      image: "https://www.myfortune11.com/myfortune-img/banner5.jpg",
      title: "title2",
    },
    {
      image: "https://www.myfortune11.com/myfortune-img/banner6.png",
      title: "title3",
    },
  ];
  return (
    <section ref={homeRef} className="h-60">
      <Carousel slides={slides} autoSlideInterval={3000} />
    </section>
  );
};

export default Home;
