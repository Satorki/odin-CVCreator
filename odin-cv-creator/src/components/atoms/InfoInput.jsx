const InfoInput = ({ inputHandler, inputTitle, inputValue }) => {
  return (
    <div className="flex justify-between">
      <p className="text-lg">{inputTitle}</p>
      <input
        type="text"
        onChange={inputHandler}
        value={inputValue}
        className="border border-black w-44"
      />
    </div>
  );
};

export default InfoInput;
