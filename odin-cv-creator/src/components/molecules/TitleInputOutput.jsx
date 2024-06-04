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

  return (
    <>
    <TitleTextInput inputName={"Name"}/>
        <TextInput
          inputName={inputValue}
          inputHandler={handleInputChange}
          value={inputs}
        />
        <TextOutput outputValue={inputs} />
    </>
  );
}

export default TitleInputOutput;

TitleInputOutput.propTypes = {
  inputValue: PropTypes.string,
  defaultValue: PropTypes.string,
};