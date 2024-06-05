import { useContext } from "react";
import InfoSectionTitleAndArrow from "../molecules/InfoSectionTitleAndArrow";
import InfoTitleAndInput from "../molecules/InfoTitleAndInput";
import { InputsContext } from "./InputsConnectionInfoCv";

const EducationInfoSection = () => {
  const {school, setSchool, specialization, setSpecialization, dateToSchool, setDateToSchool, dateFromSchool, setDateFromSchool} = useContext(InputsContext);

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
  };

  const handleDateToSchoolChange = (e) => {
    setDateToSchool(e.target.value);
  };

  const handleDateFromSchoolChange = (e) => {
    setDateFromSchool(e.target.value);
  };


  return (
    <div className="bg-slate-400 min-w-80 m-5 p-3 rounded-xl shadow-xl">
      <>
        <InfoSectionTitleAndArrow title={"Education Information"}/>
      </>
      <div className="flex flex-col gap-2">
        <InfoTitleAndInput
          inputTitle="School"
          inputHandler={handleSchoolChange}
          inputValue={school}
        />
        <InfoTitleAndInput
          inputTitle="Specialization"
          inputHandler={handleSpecializationChange}
          inputValue={specialization}
        />
        <InfoTitleAndInput
          inputTitle="Date To"
          inputHandler={handleDateToSchoolChange}
          inputValue={dateToSchool}
        />
        <InfoTitleAndInput
          inputTitle="Date From"
          inputHandler={handleDateFromSchoolChange}
          inputValue={dateFromSchool}
        />
      </div>
    </div>
  );
};

export default EducationInfoSection;
