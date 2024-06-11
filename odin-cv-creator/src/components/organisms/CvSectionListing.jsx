import { useContext } from "react";
import CvEduExpText from "../molecules/CvEduExpText";
import CvPersonalText from "../molecules/CvPersonalText";
import { InputsContext } from "./InputsControl";

const CvSectionListing = () => {
  const { educationList } = useContext(InputsContext);
  const { experienceList } = useContext(InputsContext);

  return (
    <div className="bg-slate-100 flex-1 m-5 rounded-xl p-3 shadow-lg">
      <CvPersonalText
        dataName={"General"}
        prefixValue3={"Email: "}
        prefixValue4={"Phone: "}
      />
      {experienceList.map((element, index) => (
        <CvEduExpText
          key={index}
          outputValue1={element.firstValue}
          outputValue2={element.secondValue}
          prefixValue3={"Date to: "}
          outputValue3={element.dataTo}
          prefixValue4={"Date from: "}
          outputValue4={element.dataFrom}
        />
      ))}
      {educationList.map((element, index) => (
        <CvEduExpText
          key={index}
          outputValue1={element.firstValue}
          outputValue2={element.secondValue}
          prefixValue3={"Date to: "}
          outputValue3={element.dataTo}
          prefixValue4={"Date from: "}
          outputValue4={element.dataFrom}
        />
      ))}
    </div>
  );
};

export default CvSectionListing;
