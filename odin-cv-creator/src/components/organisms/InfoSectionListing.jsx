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
      {/* <InfoSectionCard
        title={"Experience Info"}
      />
      <InfoSectionCard
        title={"School Info"}
      /> */}
    </div>
  );
};

export default InfoSectionListing;
