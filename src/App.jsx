import Footer from "./components/footer";
import Header from "./components/header";
import Advant from "./pages/advant";
import Features from "./pages/features";
import Home from "./pages/home";
import HowToPlay from "./pages/howToPlay";
import MyFortune11 from "./pages/myfortune11";
import Overview from "./pages/overview";
import useScrollToElement from "./useScrollToElement";
import FAQ from "./pages/faq";

const App = () => {
  useScrollToElement();
  return (
    <>
      <Header />
      <Home />
      <Overview />
      <MyFortune11 />
      <FAQ />
      <HowToPlay />
      <Features />
      <Advant />
      <Footer />
    </>
  );
};

export default App;
