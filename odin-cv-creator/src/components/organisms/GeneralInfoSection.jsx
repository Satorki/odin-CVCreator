import { useState } from "react"
import InfoSectionTitleAndArrow from "../molecules/InfoSectionTitleAndArrow"
import InfoTitleAndInput from "../molecules/InfoTitleAndInput"

const GeneralInfoSection = () => {

  const [name, setName] = useState("Geralt")

  const inputHandler = (e) => {
    setName(e.target.value)
  }



  return (
    <div className="bg-slate-400 min-w-80 m-5 p-3 rounded-xl shadow-xl">
      <div className="pb-5">
        <InfoSectionTitleAndArrow title={"General Information"}/>
      </div>
      <div className="flex flex-col gap-2">
        <InfoTitleAndInput inputTitle="Name" inputHandler={inputHandler} inputValue={name}/>
        <InfoTitleAndInput inputTitle="Surname" />
        <InfoTitleAndInput inputTitle="Email" />
        <InfoTitleAndInput inputTitle="Phone" />
      </div>
    </div>
  )
}

export default GeneralInfoSection