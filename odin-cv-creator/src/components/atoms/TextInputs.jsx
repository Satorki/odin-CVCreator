import PropTypes from "prop-types";

function TextInputs({ inputName, inputHandler, value }) {
  return (
    <div>
      <section
        id="input"
        className="flex justify-between bg-blue-400 gap-10 min-w-96"
      >
        <p>{inputName}:</p>
        <input
          type="text"
          name={inputName.toLowerCase()}
          onChange={inputHandler}
          value={value}
        />
      </section>
    </div>
  );
}

export default TextInputs;

TextInputs.propTypes = {
  inputName: PropTypes.string,
  inputHandler: PropTypes.func,
  value: PropTypes.string,
};
