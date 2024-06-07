import PersonalSectionCard from "../molecules/PersonalSectionCard";
import inputsData from "../../assets/inputsData.json";
import EduExpSectionCard from "../molecules/EduExpSectionCard";
import { useState } from "react";

const InfoSectionListing = () => {
  const [visibleCard, setVisibleCard] = useState("General");

  const handleCardToggle = (cardName) => {
    setVisibleCard((prevCard) => (prevCard === cardName ? "" : cardName));
  };

  return (
    <div className="">
      <PersonalSectionCard
        isVisible={visibleCard === "General"}
        handleCardToggle={() => handleCardToggle("General")}
        title={"General Info"}
        inputsData={inputsData.General}
        dataName={"General"}
      />
      <EduExpSectionCard
        isVisible={visibleCard === "Experience"}
        handleCardToggle={() => handleCardToggle("Experience")}
        title={"Experience Info"}
        inputsData={inputsData.Experience}
      />
      <EduExpSectionCard
        isVisible={visibleCard === "Education"}
        handleCardToggle={() => handleCardToggle("Education")}
        title={"School Info"}
        inputsData={inputsData.Education}
        dataName={"Education"}
      />
    </div>
  );
};

export default InfoSectionListing;
