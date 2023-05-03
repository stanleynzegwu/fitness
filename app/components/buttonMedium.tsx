const ButtonMedium = ({
  text,
  bgColor,
  extraStyle,
  handleEvent,
}: {
  text: string;
  bgColor: string;
  extraStyle?: string;
  handleEvent?: () => Promise<void>;
}) => {
  return (
    <button
      className={`${bgColor} ${extraStyle} text-white p-2 rounded-full cursor-pointer`}
      onClick={handleEvent}
    >
      {text}
    </button>
  );
};

export default ButtonMedium;
