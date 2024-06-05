function InfoInput({ inputHandler, InputValue }) {
  return (
    <>
      <input type="text" onChange={inputHandler} value={InputValue} className="border border-black"/>
    </>
  );
}

export default InfoInput;