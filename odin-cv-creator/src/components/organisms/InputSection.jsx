import GroupInput from "../molecules/GroupInput";
import jsonToArrayDeserializer from "../../serializers/jsonToArrayDeserializer";
import generalInfoData from "../../assets/generalInfoData.json"
import experianceInfoData from "../../assets/experienceInfoData.json"
import educationInfoData from "../../assets/educationInfoData.json"

function InputSection() {
  const generalInfoNames = jsonToArrayDeserializer(generalInfoData)
  const experianceInfoNames = jsonToArrayDeserializer(experianceInfoData)
  const educationInfoNames = jsonToArrayDeserializer(educationInfoData)

  return (
    <div className="flex flex-col gap-5 my-10">
      <GroupInput groupName="General Info" inputNames={generalInfoNames}/>
      <GroupInput groupName="Experience" inputNames={experianceInfoNames}/>
      <GroupInput groupName="Education" inputNames={educationInfoNames}/>
    </div>
  );
}

export default InputSection;