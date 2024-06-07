const InfoCardButtons = ({ clearInputs, addInfo }) => {
  return (
    <div className="flex justify-between pt-3">
      <button>Delete</button>
      <div className="flex justify-between w-20">
        <button onClick={clearInputs}>Clear</button>
        <button onClick={addInfo}>Add</button>
      </div>
    </div>
  );
};

export default InfoCardButtons;
