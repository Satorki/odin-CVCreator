import PropTypes from "prop-types";

function TextOutputs({ outputValue, outputClasses }) {
  return (
    <section id="output" className={outputClasses}>
      <p>{outputValue}</p>
    </section>
  );
}

export default TextOutputs;

TextOutputs.propTypes = {
  outputValue: PropTypes.string,
  outputClasses: PropTypes.string
};
