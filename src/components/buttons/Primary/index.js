const PrimaryButton = ({ children }) => {
  return (
    <button className="primary-button bg-primary text-white text-base tracking-widest py-[15px] px-40px border-none rounded-full transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-m">
      {children}
    </button>
  );
};

export default PrimaryButton;
