import { useContext } from "react";
import CvText from "../atoms/CvText";
import { InputsContext } from "./InputsConnectionInfoCv";

const EducationCvSection = () => {
  const { school, specialization, dateToSchool, dateFromSchool } =
    useContext(InputsContext);
  return (
    <>
      <CvText prefixValue={"School: "} outputValue={school} />
      <CvText prefixValue={"Specialization: "} outputValue={specialization} />
      <CvText prefixValue={"Date to: "} outputValue={dateToSchool} />
      <CvText prefixValue={"Date from: "} outputValue={dateFromSchool} />
    </>
  );
};

export default EducationCvSection;
