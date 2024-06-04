import PropTypes from "prop-types";

function TextOutput({ outputValue }) {
  return (
    <>
      <p>{outputValue}</p>
    </>
  );
}

export default TextOutput;

TextOutput.propTypes = {
  outputValue: PropTypes.string
};
