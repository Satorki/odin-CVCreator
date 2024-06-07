const InfoCardButtons = ({ clearInputs, addInfo }) => {
  return (
      <div className="flex justify-end gap-3">
        <button onClick={clearInputs}>Clear</button>
        <button onClick={addInfo}>Add</button>
      </div>
  );
};

export default InfoCardButtons;
