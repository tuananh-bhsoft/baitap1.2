import CallToActionButton from "../../../../components/buttons/CallToAction";
import PlayButton from "../../../../components/buttons/Play";
import aboutusImg from "../../../../assets/imgs/about/unsplash_LRXYS0tSyGc.png";

const AboutUs = () => {
  return (
    <div className="about-us flex justify-between items-center gap-x-40px mt-200px laptop:py-0 laptop:px-40px">
      <div className="section-info flex flex-col justify-between gap-y-10px flex-1 items-start laptop:items-center laptop:text-center">
        <p className="section-header text-secondary text-base leading-tight tracking-normal">
          About Us
        </p>
        <p className="section-title text-primary-m text-4xl leading-tight tracking-normal">
          We are the best beauty clinic
        </p>
        <p className="section-description text-tertiary-m text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat. Id dui erat sed quam tellus in purus. Pellentesque congue
          fringilla cras tellus enim.
        </p>
        <div className="actions flex justify-between items-center gap-x-40px mt-60px laptop:self-center">
          <div className="learn-more">
            <CallToActionButton>Learn More</CallToActionButton>
          </div>
          <div className="watch-video flex justify-between items-center gap-x-10px laptop:hidden">
            <PlayButton />
            <p className="text-tertiary-m text-base">Watch Video</p>
          </div>
        </div>
      </div>
      <div className="section-content flex-1 w-6/12 laptop:hidden">
        <img className="w-full" src={aboutusImg} alt="About us" />
      </div>
    </div>
  );
};

export default AboutUs;
