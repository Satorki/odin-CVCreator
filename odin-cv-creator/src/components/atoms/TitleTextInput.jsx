import PropTypes from "prop-types";

function TitleTextInput({ inputName }) {
  return (
    <>
      <p className="text-lg">{inputName}:</p>
    </>
  );
}

export default TitleTextInput;

TitleTextInput.propTypes = {
  inputName: PropTypes.string,
};
