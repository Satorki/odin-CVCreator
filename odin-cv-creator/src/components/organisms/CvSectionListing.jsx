import CvSectionTexts from "../molecules/CvPersonalText";

const CvSectionListing = () => {
  return (
    <div className="bg-slate-100 flex-1 m-5 rounded-xl p-3 shadow-lg">
      <CvSectionTexts
        dataName={"General"}
        prefixValue3={"Email: "}
        prefixValue4={"Phone: "}
      />
      {/* <CvSectionTexts
        dataName={"Experiance"}
        prefixValue3={"Date to: "}
        prefixValue4={"Date from: "}
      />
      <CvSectionTexts
        dataName={"Education"}
        prefixValue3={"Date to: "}
        prefixValue4={"Date from: "}
      /> */}
    </div>
  );
};

export default CvSectionListing;
