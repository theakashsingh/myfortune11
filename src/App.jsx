import { useScroll } from "./pages/scrollContext";
import Footer from "./components/footer";
import Advant from "./pages/advant";
import Features from "./pages/features";
import Home from "./pages/home";
import HowToPlay from "./pages/howToPlay";
import MyFortune11 from "./pages/myfortune11";
import Overview from "./pages/overview";
import useScrollToElement from "./useScrollToElement";
import FAQ from "./pages/faq";
import MainHeader from "./components/header/MainHeader";

const App = () => {
  const {appRef} = useScroll()
  useScrollToElement();
  return (
    <div ref={appRef}>
      <MainHeader />
      <Home />
      <Overview />
      <MyFortune11 />
      <HowToPlay />
      <Features />
      <Advant />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
