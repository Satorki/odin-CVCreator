import CvText from "../atoms/CvText"

const EducationCvSection = () => {
  return (
    <>
      <CvText prefixValue={"Company: "} outputValue={"inputValue"} />
      <CvText prefixValue={"Position: "} outputValue={"inputValue"} />
      <CvText prefixValue={"Date to: "} outputValue={"inputValue"} />
      <CvText prefixValue={"Date from: "} outputValue={"inputValue"} />
    </>
  )
}

export default EducationCvSection