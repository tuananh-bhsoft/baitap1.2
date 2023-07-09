import CallToActionButton from "../../../../components/buttons/CallToAction";
import frame1 from "../../../../assets/imgs/slide/Frame1.svg";

const Slider = () => {
  return (
    <div className="slider flex flex-col justify-between items-center laptop:py-0 laptop:px-40px">
      <div className="slide-container py-100px px-0 mt-120px">
        <div className="slide flex justify-between items-center gap-x-40px">
          <div className="slide-info flex flex-col justify-between items-start flex-1 laptop:items-center laptop:text-center">
            <p className="title text-primary-m text-5xl leading-tight tracking-normal">
              Clinic & beauty consultant
            </p>
            <p className="description text-primary-m text-base font-normal mt-20px">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <div className="more-details mt-40px">
              <CallToActionButton>More Details</CallToActionButton>
            </div>
          </div>
          <div className="slide-img flex-1 laptop:hidden">
            <img className="w-full" src={frame1} alt="Slide" />
          </div>
        </div>
      </div>
      <div className="slide-marker flex justify-between items-center gap-x-10px">
        <div className="marker bg-tertiary h-1 w-4 rounded-full"></div>
        <div className="marker active bg-secondary-l h-2 w-6 rounded-full"></div>
        <div className="marker bg-tertiary h-1 w-4 rounded-full"></div>
      </div>
    </div>
  );
};

export default Slider;
