import InfoSectionCard from "../molecules/InfoSectionCard";
import inputsData from "../../assets/inputsData.json";

const InfoSectionListing = () => {

  
  return (
    <div className="">
      <InfoSectionCard
        title={"General Info"}
        inputsData={inputsData.General}
        dataName={"General"}
      />
      <InfoSectionCard
        title={"Experience Info"}
        inputsData={inputsData.Experience}
        dataName={"Experience"}
      />
      <InfoSectionCard
        title={"School Info"}
        inputsData={inputsData.Education}
        dataName={"Education"}
      />
    </div>
  );
};

export default InfoSectionListing;
