import { RxCross1 } from "react-icons/rx";

const AddedInfo = ({ firstValue, secondValue, deleteInfo }) => {
  return (
    <div className="flex justify-between pt-3">
      <div className="flex gap-3 items-center">
        <p className="text-lg">
          {firstValue.length > 12
            ? `${firstValue.slice(0, 12)}...`
            : firstValue}
        </p>

        <p>
          {secondValue.length > 14
            ? `${secondValue.slice(0, 14)}...`
            : secondValue}
        </p>
      </div>
      <button
        onClick={deleteInfo}
        className="hover:text-slate-300 hover:scale-125 transform transition-transform duration-300"
      >
        <RxCross1 />
      </button>
    </div>
  );
};

export default AddedInfo;
