import animation1 from "../../../../assets/imgs/service/Animation1.svg";
import animation2 from "../../../../assets/imgs/service/Animation2.svg";
import animation3 from "../../../../assets/imgs/service/Animation3.svg";

const MainServices = () => {
  return (
    <div className="main-services flex flex-col justify-between items-center mt-200px laptop:py-0 laptop:px-40px">
      <div className="section-info flex flex-col justify-between gap-y-10px items-center text-center">
        <p className="section-header text-secondary text-base leading-tight tracking-normal">
          Main Services
        </p>
        <p className="section-title text-primary-m text-4xl leading-tight tracking-normal w-2/5 laptop:w-3/5 mobile:w-full">
          Learn services to focus on your beauty
        </p>
        <p className="section-description text-tertiary-m text-base font-normal w-4/5 laptop:w-11/12 mobile:w-full">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="section-content grid grid-cols-3 gap-x-60px mt-100px laptop:grid-cols-2 laptop:gap-y-60px tablet:grid-cols-1">
        <div className="service-card flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] transition-all duration-300 ease-in-out hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
          <img
            className="max-w-[166px] max-h-[166px]"
            src={animation1}
            alt="Card"
          />
          <div className="card-info flex flex-col justify-between items-center text-center">
            <p className="card-title text-primary-m text-lg leading-tight tracking-normal mt-20px">
              Beauty consultation
            </p>
            <p className="card-description text-tertiary-m text-sm font-normal mt-20px">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
        <div className="service-card flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] transition-all duration-300 ease-in-out hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
          <img
            className="max-w-[166px] max-h-[166px]"
            src={animation2}
            alt="Card"
          />
          <div className="card-info flex flex-col justify-between items-center text-center">
            <p className="card-title text-primary-m text-lg leading-tight tracking-normal mt-20px">
              Skin treatments
            </p>
            <p className="card-description text-tertiary-m text-sm font-normal mt-20px">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
        <div className="service-card flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] transition-all duration-300 ease-in-out hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
          <img
            className="max-w-[166px] max-h-[166px]"
            src={animation3}
            alt="Card"
          />
          <div className="card-info flex flex-col justify-between items-center text-center">
            <p className="card-title text-primary-m text-lg leading-tight tracking-normal mt-20px">
              Beauty product
            </p>
            <p className="card-description text-tertiary-m text-sm font-normal mt-20px">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
