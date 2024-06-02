import PropTypes from "prop-types";

function ExpEduForm({ firstParameter, secondParameter, endDate, startDate }) {
  return (
    <div className="flex text-xl gap-2 p-3 justify-between">
      <div>
        <h3>{firstParameter}</h3>
        <p>{secondParameter}</p>
      </div>
      <div className="">
        <p>{endDate}</p>
        <p>{startDate}</p>
      </div>
    </div>
  );
}

ExpEduForm.propTypes = {
  firstParameter: PropTypes.string,
  secondParameter: PropTypes.string,
  endDate: PropTypes.string,
  startDate: PropTypes.string,
};

export default ExpEduForm;
