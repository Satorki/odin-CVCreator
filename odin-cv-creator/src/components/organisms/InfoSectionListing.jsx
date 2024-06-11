import PersonalSectionCard from "../molecules/PersonalSectionCard";
import inputsData from "../../assets/inputsData.json";
import EducationSectionCard from "../molecules/EducationSectionCard";
import { useState } from "react";
import ExperienceSectionCard from "../molecules/ExperienceSectionCard";

const InfoSectionListing = () => {
  const [visibleCard, setVisibleCard] = useState("General");

  const handleCardToggle = (cardName) => {
    setVisibleCard((prevCard) => (prevCard === cardName ? "" : cardName));
  };

  return (
    <div className="max-w-96">
      <PersonalSectionCard
        isVisible={visibleCard === "General"}
        handleCardToggle={() => handleCardToggle("General")}
        title={"General Info"}
        inputsData={inputsData.General}
        dataName={"General"}
      />
      <ExperienceSectionCard
        isVisible={visibleCard === "Experience"}
        handleCardToggle={() => handleCardToggle("Experience")}
        title={"Experience Info"}
        inputsData={inputsData.Experience}
        dataName={"Education"}
      />
      <EducationSectionCard
        isVisible={visibleCard === "Education"}
        handleCardToggle={() => handleCardToggle("Education")}
        title={"School Info"}
        inputsData={inputsData.Education}
      />
    </div>
  );
};

export default InfoSectionListing;
