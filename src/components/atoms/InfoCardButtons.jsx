const InfoCardButtons = ({ clearInputs, addInfo }) => {
  return (
    <div className="flex justify-end gap-3">
      <button
        onClick={clearInputs}
        className="hover:text-slate-300 hover:scale-125 transform transition-transform duration-300"
      >
        Clear
      </button>
      <button
        onClick={addInfo}
        className="hover:text-slate-300 hover:scale-125 transform transition-transform duration-300"
      >
        Add
      </button>
    </div>
  );
};

export default InfoCardButtons;
