import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";

const CardTitle = ({ title, handleCardToggle, isVisible }) => {
  return (
    <div className="flex justify-between ">
      <h2 className="text-lg">{title}</h2>
      <button className="text-xl" onClick={handleCardToggle}>
        {isVisible ? <RxDoubleArrowUp /> : <RxDoubleArrowDown />}
      </button>
    </div>
  );
};

export default CardTitle;
