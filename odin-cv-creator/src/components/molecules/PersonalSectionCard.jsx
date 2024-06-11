import CardTitle from "../atoms/CardTitle";
import { InputsContext } from "../organisms/InputsControl";
import { useContext } from "react";
import InfoInput from "../atoms/InfoInput";

const PersonalSectionCard = ({
  title,
  inputsData,
  dataName,
  handleCardToggle,
  isVisible,
}) => {
  const { states, handleStateChange } = useContext(InputsContext);

  const handleChange = (id, e) => {
    handleStateChange(dataName, id, e.target.value);
  };

  return (
    <>
      <div className="bg-slate-400 min-w-80 m-5 rounded-xl shadow-xl">
        <div className="p-3">
          <CardTitle
            handleCardToggle={handleCardToggle}
            title={title}
            isVisible={isVisible}
          />
        </div>
        {isVisible && (
          <div className="flex flex-col gap-2 p-3">
            {inputsData.map((info) => (
              <InfoInput
                inputTitle={info.Title}
                key={info.id}
                inputHandler={(e) => {
                  handleChange(info.id, e);
                }}
                inputValue={states[dataName][info.id]}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PersonalSectionCard;
