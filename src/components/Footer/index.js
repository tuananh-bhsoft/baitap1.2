import { useEffect, useState } from "react";

import RollToTopButton from "../buttons/RollToTop";
import footerLogo from "../../assets/imgs/logos/FooterLogo.svg";
import facebookLight from "../../assets/icons/socials/FacebookLight.svg";
import twitterLight from "../../assets/icons/socials/TwitterLight.svg";
import linkedinLight from "../../assets/icons/socials/LinkedinLight.svg";
import youtubeLight from "../../assets/icons/socials/YoutubeLight.svg";
import instaLight from "../../assets/icons/socials/InstagramLight.svg";

const Footer = () => {
  const [rollToTopIsShown, setRollToTopIsShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        setRollToTopIsShown(true);
      } else {
        setRollToTopIsShown(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="footer pt-200px mt-200px laptop:pt-200px laptop:pr-40px laptop:pb-0 laptop:pl-40px">
      <div className="content-wrapper flex flex-col justify-between items-center max-w-main my-0 mx-auto">
        <div className="footer-info flex justify-between items-start w-full laptop:flex-col laptop:gap-y-60px">
          <div className="authorship flex flex-col justify-between items-start gap-y-20px flex-1 laptop:w-full">
            <img src={footerLogo} alt="Footer logo" />
            <p className="text-primary-sl text-base font-normal">
              <span className="font-bold">Beautice</span> is a Beauty Clinic
              WordPress Theme.
            </p>
            <div className="info italic text-sm flex flex-col justify-between items-start">
              <p className="text-primary-sl text-base font-normal">
                Baker Steet 101, NY, United States.
              </p>
              <div className="contact-info flex justify-between items-center gap-x-40px">
                <p className="text-primary-sl text-base font-normal">
                  +521 569 8966.
                </p>
                <p className="text-primary-sl text-base font-normal">
                  mail@company.com.
                </p>
              </div>
            </div>
          </div>
          <div className="site-doc flex-1 flex justify-between items-start laptop:flex-col gap-y-60px w-full">
            <div className="sitemap flex-1">
              <p className="list-header text-white text-lg">Pages</p>
              <ul className="list list-image-[url('./assets/icons/design-elements/Bullet.svg')] pl-3 pt-4">
                <li className="list-item text-primary-sl text-base font-normal mt-10px">
                  Home
                </li>
                <li className="list-item text-primary-sl text-base font-normal mt-10px">
                  About
                </li>
                <li className="list-item text-primary-sl text-base font-normal mt-10px">
                  Services
                </li>
                <li className="list-item text-primary-sl text-base font-normal mt-10px">
                  Gallery
                </li>
                <li className="list-item text-primary-sl text-base font-normal mt-10px">
                  Team
                </li>
              </ul>
            </div>
            <div className="documents flex-1">
              <p className="list-header text-white text-lg">Informations</p>
              <ul className="list list-image-[url('./assets/icons/design-elements/Bullet.svg')] pl-3 pt-4">
                <li className="list-item text-primary-sl text-base font-normal mt-10px">
                  Terms & Conditions
                </li>
                <li className="list-item text-primary-sl text-base font-normal mt-10px">
                  Privacy policy
                </li>
                <li className="list-item text-primary-sl text-base font-normal mt-10px">
                  Blog
                </li>
                <li className="list-item text-primary-sl text-base font-normal mt-10px">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-socials flex justify-between items-center gap-x-40px w-full my-100px mx-0 tablet:flex-col tablet:gap-y-40px">
          <div className="social-links flex justify-between items-center gap-x-40px">
            <img
              className="w-[24px] h-[24px]"
              src={facebookLight}
              alt="Facebook"
            />
            <img
              className="w-[24px] h-[24px]"
              src={twitterLight}
              alt="Twitter"
            />
            <img
              className="w-[24px] h-[24px]"
              src={linkedinLight}
              alt="Linkedin"
            />
            <img
              className="w-[24px] h-[24px]"
              src={youtubeLight}
              alt="Youtube"
            />
            <img
              className="w-[24px] h-[24px]"
              src={instaLight}
              alt="Instagram"
            />
          </div>
          <p className="copyright text-primary-sl text-base font-normal">
            © AltDesain Studio 2021 - All right reserved.
          </p>
        </div>
      </div>
      {rollToTopIsShown && <RollToTopButton />}
    </div>
  );
};

export default Footer;
