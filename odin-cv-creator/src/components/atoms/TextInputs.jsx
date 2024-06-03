import PropTypes from "prop-types";
import { useState } from "react";

function TextInputs({ inputName, defaultName }) {
  const [outputName, setOutputName] = useState(defaultName);

  const handleInput = (e) => {
    setOutputName(e.target.value);
  };

  return (
    <div className="flex gap-10">
      <section id="input" className="bg-blue-400 min-w-96 p-5 flex  justify-between">
        <p>{inputName}:</p>
        <input type="text" onChange={handleInput} />
      </section>
      <section id="output">
        <p>{outputName}</p>
      </section>
    </div>
  );
}

export default TextInputs;

TextInputs.propTypes = {
  inputName: PropTypes.string,
  defaultName: PropTypes.string,
};
