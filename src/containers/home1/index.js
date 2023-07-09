import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "./components/Slider";
import MainServices from "./components/MainServices";
import AboutUs from "./components/AboutUs";
import ProfessionalTeams from "./components/ProfessionalTeams";
import ContactUs from "./components/ContactUs";

const Home1 = () => {
  return (
    <div className="home-1">
      <Header />

      <div className="bg-section-1 bg-[url('./assets/imgs/bgs/SlideBackground.png')] bg-no-repeat bg-left-top bg-[length:90%_100%]">
        <div className="container max-w-main my-0 mx-auto">
          <Slider />
        </div>
      </div>

      <div className="bg-section-2 bg-[url('./assets/imgs/bgs/BG1.png')] bg-no-repeat bg-right-bottom bg-[length:60%_60%]">
        <div className="container max-w-main my-0 mx-auto">
          <MainServices />
          <AboutUs />
        </div>
      </div>

      <div className="bg-section-3 bg-[url('./assets/imgs/bgs/BG2.png')] bg-no-repeat bg-left-bottom bg-[length:80%_60%]">
        <div className="container max-w-main my-0 mx-auto">
          <ProfessionalTeams />
          <ContactUs />
        </div>
      </div>

      <div className="bg-section-4 bg-[url('./assets/imgs/bgs/FooterBG.png')] bg-no-repeat bg-bottom bg-cover">
        <Footer />
      </div>
    </div>
  );
};

export default Home1;
