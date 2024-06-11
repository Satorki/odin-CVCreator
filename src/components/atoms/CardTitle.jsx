import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";

const CardTitle = ({ title, handleCardToggle, isVisible }) => {
  return (
    <div className="flex justify-between ">
      <h2 className="text-xl">{title}</h2>
      <button
        className="text-xl hover:text-slate-300 hover:scale-125 transform transition-transform duration-300"
        onClick={handleCardToggle}
      >
        {isVisible ? <RxDoubleArrowUp /> : <RxDoubleArrowDown />}
      </button>
    </div>
  );
};

export default CardTitle;
