import { useState } from "react";
import PropTypes from "prop-types";
import TextOutput from "../atoms/TextOutput";
import TextInput from "../atoms/TextInput";
import TitleTextInput from "../atoms/TitleTextInput";

function TitleInputOutput({ inputValue, defaultValue, inputShower, textOutputClass, prefixValue }) {
  const [inputs, setInputs] = useState(defaultValue);

  const handleInputChange = (e) => {
    setInputs(e.target.value);
  };

  return (
    <>
      <div className="flex gap-10 ml-10 mr-10">
        <div
          className={
            "flex justify-between min-w-96 bg-blue-300 p-3 " + inputShower
          }
        >
          <TitleTextInput inputName={inputValue} />
          <TextInput
            inputName={inputValue}
            inputHandler={handleInputChange}
            value={inputs}
          />
        </div>
        <div className={textOutputClass}>
          <TextOutput outputValue={inputs} prefixValue={prefixValue}/>
        </div>
      </div>
    </>
  );
}

export default TitleInputOutput;

TitleInputOutput.propTypes = {
  inputValue: PropTypes.string,
  defaultValue: PropTypes.string,
  inputShower: PropTypes.string,
  textOutputClass: PropTypes.string,
  prefixValue: PropTypes.string
};
