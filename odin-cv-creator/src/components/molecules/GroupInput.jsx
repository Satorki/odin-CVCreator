import Input from "../atoms/Input";
import GroupTitle from "../atoms/GroupTitle";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function GroupInput({ groupName, inputNames }) {
  return (
    <div className="bg-sky-200 flex-col flex gap-3 p-5 rounded-lg shadow-lg">
      <GroupTitle groupName={groupName} />
      {inputNames.map((name) => 
        <Input key={uuidv4()} name={name} />
      )}
    </div>
  );
}

GroupInput.propTypes = {
  inputNames: PropTypes.arrayOf(PropTypes.string),
  groupName: PropTypes.string,
};

export default GroupInput;
