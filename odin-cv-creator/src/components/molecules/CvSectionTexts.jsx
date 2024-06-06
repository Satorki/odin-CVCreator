import { useContext } from "react";
import SingleCvText from "../atoms/SingleCvText";
import { InputsContext } from "../organisms/InputsConnections";

const CvSectionTexts = ({
  dataName,
  prefixValue1,
  prefixValue2,
  prefixValue3,
  prefixValue4,
}) => {
  const { states } = useContext(InputsContext);

  return (
    <>
      <SingleCvText
        outputValue={states[dataName][0]}
        prefixValue={prefixValue1}
      />
      <SingleCvText
        outputValue={states[dataName][1]}
        prefixValue={prefixValue2}
      />
      <SingleCvText
        outputValue={states[dataName][2]}
        prefixValue={prefixValue3}
      />
      <SingleCvText
        outputValue={states[dataName][3]}
        prefixValue={prefixValue4}
      />
    </>
  );
};

export default CvSectionTexts;
