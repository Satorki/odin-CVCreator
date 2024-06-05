import InfoInput from "../atoms/InfoInput"
import InfoInputTitle from "../atoms/InfoInputTitle"

const InfoTitleAndInput = ({inputHandler, inputTitle, inputValue}) => {
  return (
    <div className="flex justify-between">
      <InfoInputTitle inputTitle={inputTitle}/>
      <InfoInput inputHandler={inputHandler} InputValue={inputValue}/>
    </div>
  )
  }

export default InfoTitleAndInput