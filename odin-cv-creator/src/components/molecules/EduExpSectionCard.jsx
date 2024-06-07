import { useState } from "react";
import CardTitle from "../atoms/CardTitle";
import InfoCardButtons from "../atoms/InfoCardButtons";
import InfoInput from "../atoms/InfoInput";
import AddedInfo from "../atoms/AddedInfo";

const EduExpSectionCard = ({
  title,
  inputsData,
  handleCardToggle,
  isVisible,
  dataName
}) => {
  const [inputValues, setInputValues] = useState(() =>
    inputsData.reduce((acc, input) => {
      acc[input.id] = "";
      return acc;
    }, {})
  );

  const clearInputs = () => {
    const clearedValues = inputsData.reduce((acc, input) => {
      acc[input.id] = "";
      return acc;
    }, {});
    setInputValues(clearedValues);
  };

  const handleChange = (id, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const [addedElements, setAddedElements] = useState([]);

  const addInfo = () => {
    setAddedElements((prevElements) => {
      let firstValue, secondValue;
      if (dataName === "Education") {
        firstValue = inputValues[8];  // Upewnij się, że indeks 4 istnieje
        secondValue = inputValues[9]; // Upewnij się, że indeks 5 istnieje
      } else {
        firstValue = inputValues[4];  // Upewnij się, że indeks 8 istnieje
        secondValue = inputValues[5]; // Upewnij się, że indeks 9 istnieje
      }
      return [...prevElements, { firstValue, secondValue }];
    });
  };

  return (
    <>
      <div className="bg-slate-400 min-w-80 m-5 p-3 rounded-xl shadow-xl">
        <div className="pb-5">
          <CardTitle
            handleCardToggle={handleCardToggle}
            title={title}
            isVisible={isVisible}
          />
        </div>
        {isVisible && (
          <div className="flex flex-col gap-2">
            {inputsData.map((info) => (
              <InfoInput
                inputTitle={info.Title}
                key={info.id}
                inputValue={inputValues[info.id]}
                inputHandler={(e) => handleChange(info.id, e.target.value)}
              />
            ))}
            <InfoCardButtons clearInputs={clearInputs} addInfo={addInfo} />
          </div>
        )}
        <div>
          {addedElements.map((element, index) => (
            <AddedInfo
              key={index}
              firstValue={element.firstValue}
              secondValue={element.secondValue}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EduExpSectionCard;
