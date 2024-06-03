import { useState } from "react";
import TextInputs from "../atoms/TextInputs";
import TextOutputs from "../atoms/TextOutputs";
import PropTypes from "prop-types";

function GeneralInputs({ inputValue, defaultValue }) {
  const [inputs, setInputs] = useState(defaultValue);

  const handleInputChange = (e) => {
    setInputs(e.target.value);
  };

  return (
    <div className="flex gap-10">
        <TextInputs
          inputName={inputValue}
          inputHandler={handleInputChange}
          value={inputs}
        />
        <TextOutputs outputValue={inputs} outputClasses={"text-xl"} />
    </div>
  );
}

export default GeneralInputs;

GeneralInputs.propTypes = {
  inputValue: PropTypes.string,
  defaultValue: PropTypes.string,
};

// const [outputName, setOutputName] = useState("");
// const [outputSurname, setOutputSurname] = useState("");
// const [outputEmail, setOutputEmail] = useState("");
// const [outputPhone, setOutputPhone] = useState("");

// const nameHandler = (e) => {
//   setOutputName(e.target.value);
// };
// const surnameHandler = (e) => {
//   setOutputSurname(e.target.value);
// };
// const emailHandler = (e) => {
//   setOutputEmail(e.target.value);
// };
// const phoneHandler = (e) => {
//   setOutputPhone(e.target.value);
// };
