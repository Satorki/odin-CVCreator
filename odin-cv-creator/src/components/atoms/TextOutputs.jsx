import PropTypes from "prop-types";

function TextOutputs({ outputValue }) {
  return (
    <section id="output">
      <p>{outputValue}</p>
    </section>
  );
}

export default TextOutputs;

TextOutputs.propTypes = {
  outputValue: PropTypes.string
};
