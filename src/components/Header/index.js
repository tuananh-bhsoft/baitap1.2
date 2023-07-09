import { useState, useEffect } from "react";

import PrimaryButton from "../buttons/Primary";
import mainLogo from "../../assets/imgs/logos/MainLogo.svg";
import hamburgerMenu from "../../assets/icons/design-elements/HamburgerMenu.svg";
import close from "../../assets/icons/design-elements/Close.svg";

const Header = () => {
  const [drawerIsShown, setDrawerIsShown] = useState(false);
  const [pageIsScrolled, setPageIsScrolled] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;
    const onScroll = () => {
      const scrolledHeight = window.scrollY;

      if (scrolledHeight > headerHeight) {
        setPageIsScrolled(true);
      } else {
        setPageIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleDrawerIsShown = () => {
    setDrawerIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <div
      className={
        pageIsScrolled
          ? "header fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out bg-white opacity-95 shadow-[10px_13px_80px_14px_#f2f4ff]"
          : "header fixed top-30px left-0 w-full z-10 transition-all duration-300 ease-in-out"
      }
    >
      <div className="content-wrapper flex justify-between items-center max-w-main py-10px px-0 my-0 mx-auto laptop:py-10px laptop:px-40px">
        <img className="main-logo" src={mainLogo} alt="Main logo" />
        <div className="nav flex justify-between items-center gap-x-40px">
          <img
            className="hamburger hidden w-30px hover:cursor-pointer laptop:block"
            src={hamburgerMenu}
            alt="Hamburger"
            onClick={toggleDrawerIsShown}
          />
          <ul className="nav-links flex justify-between items-center gap-x-40px list-none laptop:hidden">
            <li className="nav-item active">
              <a
                className="no-underline text-primary-l text-base font-semibold whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                Home +
              </a>
            </li>
            <li className="nav-item">
              <a
                className="no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                Service
              </a>
            </li>
            <li className="nav-item">
              <a
                className="no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a
                className="no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                Blog
              </a>
            </li>
          </ul>
          <div className="contact-button tablet:hidden">
            <PrimaryButton>Contact</PrimaryButton>
          </div>
        </div>
      </div>

      <div className="side-drawer hidden laptop:block">
        <div
          className={
            drawerIsShown
              ? "overlay-shown w-full h-full fixed top-0 left-0 bg-[#33333380] transition-all duration-500 ease-in-out"
              : "overlay w-full h-full fixed top-0 -left-full bg-[#33333380] transition-all duration-500 ease-in-out"
          }
          onClick={toggleDrawerIsShown}
        ></div>
        <div
          className={
            drawerIsShown
              ? "drawer-content-shown fixed top-0 left-0 w-[350px] h-full bg-white p-20px transition-all duration-500 ease-in-out mobile:w-full"
              : "drawer-content fixed top-0 -left-[350px] w-[350px] h-full bg-white p-20px transition-all duration-500 ease-in-out"
          }
        >
          <div className="top flex justify-between items-center">
            <img className="main-logo" src={mainLogo} alt="Main logo" />
            <img
              className="close w-30px hover:cursor-pointer"
              src={close}
              alt="Close"
              onClick={toggleDrawerIsShown}
            />
          </div>
          <ul className="side-nav-links flex flex-col justify-between items-start gap-y-20px list-none pl-[5px] mt-30px">
            <li className="side-nav-item active">
              <a
                className="no-underline text-primary-l text-base font-semibold whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                Home +
              </a>
            </li>
            <li className="side-nav-item">
              <a
                className="no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                About
              </a>
            </li>
            <li className="side-nav-item">
              <a
                className="no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                Service
              </a>
            </li>
            <li className="side-nav-item">
              <a
                className="no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                Gallery
              </a>
            </li>
            <li className="side-nav-item">
              <a
                className="no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l"
                href="/"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
