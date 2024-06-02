import PropTypes from "prop-types";


function ValuesInput({ name, setCvData1 }) {

  const handleChange = (e) => {
    setCvData1(e.target.value)
  }

  return (
    <div className="flex gap-2 justify-between">
      <p className="p-1">{name}: </p>
      <input
        type="text"
        onChange={handleChange}
        className="shadow-lg border border-black border-3 p-1 max-w-36"
      />
    </div>
  );
}

ValuesInput.propTypes = {
  name: PropTypes.string,
  setCvData1: PropTypes.func,
};

export default ValuesInput;
