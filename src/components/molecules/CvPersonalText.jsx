import { useContext } from "react";
import SingleCvText from "../atoms/SingleCvText";
import { InputsContext } from "../organisms/InputsControl";

const CvPersonalText = ({
  dataName,
  prefixValue1,
  prefixValue2,
  prefixValue3,
  prefixValue4,
}) => {
  const { states } = useContext(InputsContext);

  return (
    <>
      <div className="flex gap-3 pt-3 items-end pl-24">
        <div className="">
          <SingleCvText
            outputValue={states[dataName][0]}
            prefixValue={prefixValue1}
          />
        </div>
        <div className="text-2xl">
          <SingleCvText
            outputValue={states[dataName][1]}
            prefixValue={prefixValue2}
          />
        </div>
      </div>
      <div className="flex justify-end gap-10 p-3">
      <SingleCvText
        outputValue={states[dataName][2]}
        prefixValue={prefixValue3}
      />
      <SingleCvText
        outputValue={states[dataName][3]}
        prefixValue={prefixValue4}
      />
      </div>
    </>
  );
};

export default CvPersonalText;
