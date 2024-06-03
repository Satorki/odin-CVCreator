import { useState } from "react";
import TextInputs from "../atoms/TextInputs";
import TextOutputs from "../atoms/TextOutputs";

function GeneralInputs() {
  const [inputs, setInputs] = useState({
    name: "Geralt",
    surname: "from Rivia",
    email: "geralt@rivia.tem",
    phone: "007 008 009",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="flex gap-10">
      <div className="bg-blue-400 min-w-96 flex flex-col gap-3 p-5 rounded-lg">
        <TextInputs
          inputName="Name"
          inputHandler={handleInputChange}
          value={inputs.name}
        />
        <TextInputs
          inputName="Surname"
          inputHandler={handleInputChange}
          value={inputs.surname}
        />
        <TextInputs
          inputName="Email"
          inputHandler={handleInputChange}
          value={inputs.email}
        />
        <TextInputs
          inputName="Phone"
          inputHandler={handleInputChange}
          value={inputs.phone}
        />
      </div>
      <div className="bg-blue-200 rounded-lg p-5 w-full">
        <TextOutputs outputValue={inputs.name} />
        <TextOutputs outputValue={inputs.surname} />
        <TextOutputs outputValue={inputs.email} />
        <TextOutputs outputValue={inputs.phone} />
      </div>
    </div>
  );
}

export default GeneralInputs;

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
