import { useState } from "react";
import PropTypes from "prop-types";
import TextOutput from "../atoms/TextOutput";
import TextInput from "../atoms/TextInput";
import TitleTextInput from "../atoms/TitleTextInput";

function TitleInputOutput({ inputValue, defaultValue }) {
  const [inputs, setInputs] = useState(defaultValue);

  const handleInputChange = (e) => {
    setInputs(e.target.value);
  };

  const hideInputs = "scale-0"
  const showInputs = "scale-100"

  return (
    <>
      <div className="flex gap-10 ml-10 mr-10">
        <div className={"flex justify-between min-w-96 bg-blue-300 p-3 " + hideInputs}>
        <TitleTextInput inputName={inputValue} />
        <TextInput
          inputName={inputValue}
          inputHandler={handleInputChange}
          value={inputs}
        />
        </div>
        <TextOutput outputValue={inputs} />
      </div>
    </>
  );
}

export default TitleInputOutput;

TitleInputOutput.propTypes = {
  inputValue: PropTypes.string,
  defaultValue: PropTypes.string,
};
