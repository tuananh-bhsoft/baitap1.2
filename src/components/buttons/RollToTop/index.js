import rollToTop from "../../../assets/icons/design-elements/RollToTop.svg";

const RollToTopButton = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="roll-to-top" onClick={scrollToTop}>
      <div className="w-9 h-9 bg-primary rounded-[5px] flex justify-center items-center fixed right-50px bottom-100px transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-m hover:shadow-[-2px_6px_16px_-1px_#e6e9fd]">
        <img src={rollToTop} alt="Roll to top button" />
      </div>
    </div>
  );
};

export default RollToTopButton;
