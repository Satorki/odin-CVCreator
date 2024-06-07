import { RxCross1 } from "react-icons/rx";

const AddedInfo = ({ firstValue, secondValue, deleteInfo }) => {
  return (
    <div className="flex justify-between pt-3">
      <div className="flex gap-3">
        <p>{firstValue}</p>
        <p>{secondValue}</p>
      </div>
      <button onClick={deleteInfo}>
        <RxCross1 />
      </button>
    </div>
  );
};

export default AddedInfo;
