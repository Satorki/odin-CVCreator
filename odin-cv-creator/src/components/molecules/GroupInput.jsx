import ValuesInput from "../atoms/ValuesInput";
import GroupTitleInput from "../atoms/GroupTitleInput";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi2";
import { useState } from "react";

function GroupInput({ groupName, inputNames, setCvData2 }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-sky-200 flex-col flex gap-3 p-5 rounded-lg shadow-lg">
      <div className="flex justify-between pl-10 items-center">
        <GroupTitleInput groupName={groupName} />
        <div className="w-5">
          <div className="cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <HiChevronDoubleDown /> : <HiChevronDoubleUp />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-3">
          {inputNames.map((name) => (
            <ValuesInput key={uuidv4()} name={name} setCvData1={setCvData2} />
          ))}
        </div>
      )}
    </div>
  );
}

GroupInput.propTypes = {
  inputNames: PropTypes.arrayOf(PropTypes.string),
  groupName: PropTypes.string,
  setCvData2: PropTypes.func,
};

export default GroupInput;
