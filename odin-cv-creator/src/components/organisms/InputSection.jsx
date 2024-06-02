import GroupInput from "../molecules/GroupInput";
import jsonToArrayDeserializer from "../../serializers/jsonToArrayDeserializer";
import generalInfoData from "../../assets/generalInfoData.json";
import experianceInfoData from "../../assets/experienceInfoData.json";
import educationInfoData from "../../assets/educationInfoData.json";
import PropTypes from "prop-types";

function InputSection({ setCvData3 }) {
  const generalInfoNames = jsonToArrayDeserializer(generalInfoData);
  const experianceInfoNames = jsonToArrayDeserializer(experianceInfoData);
  const educationInfoNames = jsonToArrayDeserializer(educationInfoData);

  return (
    <div className="flex flex-col gap-5 my-10 min-w-80">
      <GroupInput
        groupName="General Info"
        inputNames={generalInfoNames}
        setCvData2={setCvData3}
      />
      <GroupInput groupName="Experience" inputNames={experianceInfoNames} />
      <GroupInput groupName="Education" inputNames={educationInfoNames} />
    </div>
  );
}

InputSection.propTypes = {
  setCvData3: PropTypes.func,
};

export default InputSection;
