import PropTypes from "prop-types";

function NameForm({nameFormed}) {
  return (
    <div className="flex flex-col gap-5 my-10">
      <p>{nameFormed}</p>
    </div>
  );
}

NameForm.propTypes = {
  nameFormed: PropTypes.string,
};
export default NameForm;
