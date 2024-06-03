import PropTypes from "prop-types";

function TextInputs({ inputName, inputHandler, value }) {
  return (
    <div className="flex gap-10">
      <section
        id="input"
        className="flex justify-between w-full"
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
