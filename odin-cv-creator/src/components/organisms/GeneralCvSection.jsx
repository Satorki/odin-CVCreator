import { useContext } from "react";
import CvText from "../atoms/CvText";
import { InputsContext } from "./InputsConnectionInfoCv";

const GeneralCvSection = () => {
  const {name, surname, email, phone} = useContext(InputsContext)
  return (
    <>
      <CvText outputValue={name} />
      <CvText outputValue={surname} />
      <CvText prefixValue={"Email: "} outputValue={email} />
      <CvText prefixValue={"Tel: "} outputValue={phone} />
    </>
  );
};

export default GeneralCvSection;
