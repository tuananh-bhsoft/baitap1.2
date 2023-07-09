const CallToActionButton = ({ children }) => {
  return (
    <button className="call-to-action-button bg-primary text-white text-base tracking-widest py-[15px] px-40px border-none rounded-full shadow-[0_17px_22px_#eee] transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-m hover:shadow-[0_25px_50px_25px_#e6e9fd]">
      {children}
    </button>
  );
};

export default CallToActionButton;
