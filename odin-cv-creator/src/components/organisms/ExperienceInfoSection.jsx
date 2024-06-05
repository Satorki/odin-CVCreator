import InfoSectionTitleAndArrow from "../molecules/InfoSectionTitleAndArrow"
import InfoTitleAndInput from "../molecules/InfoTitleAndInput"

const ExperienceInfoSection = () => {
  return (
    <>
      <>
        <InfoSectionTitleAndArrow title={"Experience Information"}/>
      </>
      <>
        <InfoTitleAndInput title="Company" />
        <InfoTitleAndInput title="Position" />
        <InfoTitleAndInput title="Date to" />
        <InfoTitleAndInput title="Date from" />
      </>
    </>
  )
}

export default ExperienceInfoSection 