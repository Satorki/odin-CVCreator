import { useContext } from "react";
import CvText from "../atoms/CvText";
import { InputsContext } from "./InputsConnectionInfoCv";

const ExperienceCvSection = () => {
  const { company, position, dateToCompany, dateFromCompany } =
    useContext(InputsContext);
  return (
    <>
      <CvText prefixValue={"Company: "} outputValue={company} />
      <CvText prefixValue={"Position: "} outputValue={position} />
      <CvText prefixValue={"Date to: "} outputValue={dateToCompany} />
      <CvText prefixValue={"Date from: "} outputValue={dateFromCompany} />
    </>
  );
};

export default ExperienceCvSection;
