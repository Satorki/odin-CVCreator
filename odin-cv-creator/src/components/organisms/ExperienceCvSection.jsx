import CvText from "../atoms/CvText"

const ExperienceCvSection = () => {
  return (
    <>
      <CvText prefixValue={"School: "} outputValue={"inputValue"} />
      <CvText prefixValue={"Specialization: "} outputValue={"inputValue"} />
      <CvText prefixValue={"Date to: "} outputValue={"inputValue"} />
      <CvText prefixValue={"Date from: "} outputValue={"inputValue"} />
    </>
  )
}

export default ExperienceCvSection