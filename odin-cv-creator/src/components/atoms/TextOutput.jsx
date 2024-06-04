import PropTypes from "prop-types";

function TextOutput({ outputValue, prefixValue }) {
  return (
    <>
      <p>{prefixValue}{outputValue}</p>
    </>
  );
}

export default TextOutput;

TextOutput.propTypes = {
  outputValue: PropTypes.string,
  prefixValue: PropTypes.string
};
