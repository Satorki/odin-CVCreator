import CardTitle from "../atoms/CardTitle";
import { InputsContext } from "../organisms/InputsConnections";
import { useContext } from "react";
import InfoInput from "../atoms/InfoInput";

const InfoSectionCard = ({ title, inputsData, dataName }) => {
  const { states, handleStateChange } = useContext(InputsContext);

  const handleChange = (index, e) => {
    handleStateChange(dataName, index, e.target.value);
  };

  return (
    <>
      <div className="bg-slate-400 min-w-80 m-5 p-3 rounded-xl shadow-xl">
        <div className="pb-5">
          <CardTitle title={title} />
        </div>
        <div className="flex flex-col gap-2">
          {inputsData.map((info, index) => (
            <InfoInput
              inputTitle={info.Title}
              key={info.id}
              inputHandler={(e) => {
                handleChange(index, e);
              }}
              inputValue={states[dataName][index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoSectionCard;
