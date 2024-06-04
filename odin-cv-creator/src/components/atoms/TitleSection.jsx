import PropTypes from "prop-types";

function TitleSection({title}) {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
}

export default TitleSection;

TitleSection.propTypes = {
  inputName: PropTypes.string
};