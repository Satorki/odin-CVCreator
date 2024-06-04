import PropTypes from "prop-types";

function TextInput({ inputHandler, value }) {
  return (
    <>
      <input type="text" onChange={inputHandler} value={value} />
    </>
  );
}

export default TextInput;

TextInput.propTypes = {
  inputHandler: PropTypes.func,
  value: PropTypes.string
};
