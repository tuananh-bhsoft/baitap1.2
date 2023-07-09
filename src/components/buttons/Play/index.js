import playIcon from "../../../assets/icons/design-elements/PolygonPlay.svg";

const PlayButton = () => {
  return (
    <div className="play-button bg-secondary-m flex justify-center items-center p-20px rounded-full transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-l hover:shadow-[0px_25px_50px_25px_#e6e9fd]">
      <img src={playIcon} alt="Play button" />
    </div>
  );
};

export default PlayButton;
