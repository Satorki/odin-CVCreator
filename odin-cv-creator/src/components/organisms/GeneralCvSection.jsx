import CvText from "../atoms/CvText";

const GeneralCvSection = () => {
  return (
    <>
      <CvText outputValue={"inputValue"} />
      <CvText outputValue={"inputValue"} />
      <CvText prefixValue={"Email: "} outputValue={"inputValue"} />
      <CvText prefixValue={"Tel: "} outputValue={"inputValue"} />
    </>
  );
};

export default GeneralCvSection;
