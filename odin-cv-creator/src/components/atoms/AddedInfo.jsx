import { RxCross1 } from "react-icons/rx";

const AddedInfo = ({ firstValue, secondValue, deleteInfo }) => {
  
  return (
    <div className="flex justify-between pt-3">
      <div className="flex gap-3">
      <p>{ firstValue.length > 20 ? `${firstValue.slice(0,20)}...` : firstValue}</p>
        
        <p>{ secondValue.length > 20 ? `${secondValue.slice(0,20)}...` : secondValue}</p>
      </div>
      <button onClick={deleteInfo}>
        <RxCross1 />
      </button>
    </div>
  );
};

export default AddedInfo;
