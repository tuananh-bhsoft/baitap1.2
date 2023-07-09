import professor1 from "../../../../assets/imgs/professional/unsplash_pTrhfmj2jDA.png";
import professor2 from "../../../../assets/imgs/professional/unsplash_FVh_yqLR9eA.png";
import professor3 from "../../../../assets/imgs/professional/unsplash_mEZ3PoFGs_k.png";
import twitter from "../../../../assets/icons/socials/Twitter.svg";
import facebook from "../../../../assets/icons/socials/Facebook.svg";
import insta from "../../../../assets/icons/socials/Instagram.svg";

const ProfessionalTeams = () => {
  return (
    <div className="professional-teams flex flex-col justify-between items-center mt-200px laptop:py-0 laptop:px-40px">
      <div className="section-info flex flex-col justify-between gap-y-10px items-center text-center">
        <p className="section-header text-secondary text-base leading-tight tracking-normal">
          Professional Teams
        </p>
        <p className="section-title text-primary-m text-4xl leading-tight tracking-normal">
          The Professional Expert
        </p>
        <p className="section-description text-tertiary-m text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div className="section-content flex justify-between items-center w-full mt-100px laptop:flex-col">
        <div className="expert-card flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] first:bg-transparent first:relative first:-right-30px first:shadow-none last:bg-transparent last:relative last:right-30px last:shadow-none laptop:w-full laptop:first:static laptop:last:static">
          <img
            className="max-w-[146px] max-h-[146px] my-40px mx-0"
            src={professor1}
            alt="Card"
          />
          <div className="card-info flex flex-col justify-between items-center text-center">
            <p className="card-header text-secondary text-base leading-tight tracking-normal">
              Surgeon
            </p>
            <p className="card-title text-primary-m text-lg leading-tight tracking-normal mt-20px">
              Briyan Nevalli
            </p>
            <p className="card-description text-tertiary-m text-sm font-normal mt-20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links flex justify-between items-center gap-x-40px my-40px mx-0">
              <div className="social-icon flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={twitter}
                  alt="Twitter"
                />
              </div>
              <div className="social-icon flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={facebook}
                  alt="Facebook"
                />
              </div>
              <div className="social-icon flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={insta}
                  alt="Instagram"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="expert-card flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] first:bg-transparent first:relative first:-right-30px first:shadow-none last:bg-transparent last:relative last:right-30px last:shadow-none laptop:w-full laptop:first:static laptop:last:static">
          <img
            className="max-w-[146px] max-h-[146px] my-40px mx-0"
            src={professor2}
            alt="Card"
          />
          <div className="card-info flex flex-col justify-between items-center text-center">
            <p className="card-header text-secondary text-base leading-tight tracking-normal">
              Dermatologist
            </p>
            <p className="card-title text-primary-m text-lg leading-tight tracking-normal mt-20px">
              Bella Sebastian
            </p>
            <p className="card-description text-tertiary-m text-sm font-normal mt-20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links flex justify-between items-center gap-x-40px my-40px mx-0">
              <div className="social-icon flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={twitter}
                  alt="Twitter"
                />
              </div>
              <div className="social-icon flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={facebook}
                  alt="Facebook"
                />
              </div>
              <div className="social-icon flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={insta}
                  alt="Instagram"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="expert-card flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] first:bg-transparent first:relative first:-right-30px first:shadow-none last:bg-transparent last:relative last:right-30px last:shadow-none laptop:w-full laptop:first:static laptop:last:static">
          <img
            className="max-w-[146px] max-h-[146px] my-40px mx-0"
            src={professor3}
            alt="Card"
          />
          <div className="card-info flex flex-col justify-between items-center text-center">
            <p className="card-header text-secondary text-base leading-tight tracking-normal">
              Stylist expert
            </p>
            <p className="card-title text-primary-m text-lg leading-tight tracking-normal mt-20px">
              Lilly Adams
            </p>
            <p className="card-description text-tertiary-m text-sm font-normal mt-20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links flex justify-between items-center gap-x-40px my-40px mx-0">
              <div className="social-icon flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={twitter}
                  alt="Twitter"
                />
              </div>
              <div className="social-icon flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={facebook}
                  alt="Facebook"
                />
              </div>
              <div className="social-icon flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={insta}
                  alt="Instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTeams;
