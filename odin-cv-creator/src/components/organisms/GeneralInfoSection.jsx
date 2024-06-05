// components/organisms/GeneralInfoSection.js
import { useContext } from "react";
import InfoSectionTitleAndArrow from "../molecules/InfoSectionTitleAndArrow";
import InfoTitleAndInput from "../molecules/InfoTitleAndInput";
import { InputsContext } from "./InputsConnectionInfoCv";

const GeneralInfoSection = () => {
  const {
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    phone,
    setPhone,
  } = useContext(InputsContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="bg-slate-400 min-w-80 m-5 p-3 rounded-xl shadow-xl">
      <div className="pb-5">
        <InfoSectionTitleAndArrow title={"General Information"} />
      </div>
      <div className="flex flex-col gap-2">
        <InfoTitleAndInput
          inputTitle="Name"
          inputHandler={handleNameChange}
          inputValue={name}
        />
        <InfoTitleAndInput
          inputTitle="Surname"
          inputHandler={handleSurnameChange}
          inputValue={surname}
        />
        <InfoTitleAndInput
          inputTitle="Email"
          inputHandler={handleEmailChange}
          inputValue={email}
        />
        <InfoTitleAndInput
          inputTitle="Phone"
          inputHandler={handlePhoneChange}
          inputValue={phone}
        />
      </div>
    </div>
  );
};

export default GeneralInfoSection;
