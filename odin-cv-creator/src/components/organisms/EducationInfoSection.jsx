import InfoSectionTitleAndArrow from "../molecules/InfoSectionTitleAndArrow";
import InfoTitleAndInput from "../molecules/InfoTitleAndInput";

const EducationInfoSection = () => {
  return (
    <>
      <>
        <InfoSectionTitleAndArrow title={"Education Information"}/>
      </>
      <>
        <InfoTitleAndInput title="School" />
        <InfoTitleAndInput title="Specialization" />
        <InfoTitleAndInput title="Date to" />
        <InfoTitleAndInput title="Date from" />
      </>
    </>
  );
};

export default EducationInfoSection;
