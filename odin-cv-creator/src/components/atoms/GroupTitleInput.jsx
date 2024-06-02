import PropTypes from "prop-types";

const GroupTitleInput = ({groupName}) => {
  return (
    <div>
      <h2 className="text-center text-2xl">{groupName}</h2>
    </div>
  );
};

GroupTitleInput.propTypes = {
    groupName: PropTypes.string,
};

export default GroupTitleInput;
