import { useContext } from "react";
import CvEduExpText from "../molecules/CvEduExpText";
import CvPersonalText from "../molecules/CvPersonalText";
import { InputsContext } from "./InputsControl";

const CvSectionListing = () => {
  const { educationList } = useContext(InputsContext);
  const { experienceList } = useContext(InputsContext);

  return (
    <div className="bg-slate-100 flex-1 m-5 rounded-xl shadow-lg">
      <div className="border-b-2 border-black text-center">
      <CvPersonalText
        dataName={"General"}
        prefixValue3={"Email: "}
        prefixValue4={"Phone: "}
      />
      </div>
      <div className="bg-blue-200">
      <h3 className="text-lg pt-5 pl-5 border-b w-96 border-black">Experience</h3>
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
      </div>
      <div className="mb-5 bg-rose-200">
      <h3 className="text-lg pt-5 pl-5 border-b w-96 border-black">Education</h3>
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
    </div>
  );
};

export default CvSectionListing;
