import PropTypes from "prop-types";

const GroupTitle = ({groupName}) => {
  return (
    <div>
      <h2 className="text-center text-3xl">{groupName}</h2>
    </div>
  );
};

GroupTitle.propTypes = {
    groupName: PropTypes.string,
};

export default GroupTitle;
