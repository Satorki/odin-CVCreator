import SingleCvText from "../atoms/SingleCvText";

const CvEduExpText = ({
  prefixValue1,
  prefixValue2,
  prefixValue3,
  prefixValue4,
  outputValue1,
  outputValue2,
  outputValue3,
  outputValue4
}) => {


  return (
    <>
    <div className="flex p-3 gap-10">
<div className="">
      <SingleCvText
        outputValue={outputValue1}
        prefixValue={prefixValue1}
      />
      <SingleCvText
        outputValue={outputValue2}
        prefixValue={prefixValue2}
      />
      </div>
      <div>
      <SingleCvText
        outputValue={outputValue3}
        prefixValue={prefixValue3}
      />
      <SingleCvText
        outputValue={outputValue4}
        prefixValue={prefixValue4}
      />
      </div>
      </div>
    </>
  );
};

export default CvEduExpText;
