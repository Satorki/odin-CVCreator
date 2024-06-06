import CardTitle from "../atoms/CardTitle";
import InfoTitleAndInput from "./InputSection";
import generalInputsData from "../../assets/generalInputsData.json";
import { InputsContext } from "../organisms/InputsConnections";
import { useContext } from "react";

const InfoSectionCard = ({ title }) => {
  const { states, handleStateChange } = useContext(InputsContext);

  const handleChange = (id, e) => {
    handleStateChange(id, e.target.value);
  };

  return (
    <>
      <div className="bg-slate-400 min-w-80 m-5 p-3 rounded-xl shadow-xl">
        <div className="pb-5">
          <CardTitle title={title}/>
        </div>
        <div className="flex flex-col gap-2">
          {generalInputsData.map((info) => (
            <InfoTitleAndInput
              inputTitle={info.Title}
              key={info.id}
              inputHandler={(e) => {
                handleChange(info.id, e);
              }}
              inputValue={states[info.id]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoSectionCard;
