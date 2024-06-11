import { useContext, useEffect, useState } from "react";
import CardTitle from "../atoms/CardTitle";
import InfoCardButtons from "../atoms/InfoCardButtons";
import InfoInput from "../atoms/InfoInput";
import AddedInfo from "../atoms/AddedInfo";
import { InputsContext } from "../organisms/InputsControl";

const EducationSectionCard = ({
  title,
  inputsData,
  handleCardToggle,
  isVisible,
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

  const [addedElements, setAddedElements] = useState([
    {
      firstValue: inputsData[0].default,
      secondValue: inputsData[1].default,
      dataTo: inputsData[2].default,
      dataFrom: inputsData[3].default,
    },
  ]);

  const addInfo = () => {
    setAddedElements((prevElements) => {
      let firstValue, secondValue, dataTo, dataFrom;
      firstValue = inputValues[8];
      secondValue = inputValues[9];
      dataTo = inputValues[10];
      dataFrom = inputValues[11];
      return [...prevElements, { firstValue, secondValue, dataTo, dataFrom }];
    });
    clearInputs();
  };

  console.log();

  const deleteInfo = (index) => {
    setAddedElements((prevElements) =>
      prevElements.filter((_, i) => i !== index)
    );
  };

  const { setEducationList } = useContext(InputsContext);
  useEffect(() => {
    setEducationList(addedElements);
  }, [addedElements, setEducationList]);

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
                inputValue={inputValues[info.id]}
                inputHandler={(e) => handleChange(info.id, e.target.value)}
              />
            ))}
            <InfoCardButtons clearInputs={clearInputs} addInfo={addInfo} />
          </div>
        )}
        <div className="rounded-t-xl rounded-b-xl border-t-4 border-pink-600 pr-3 pl-3 pb-3 bg-pink-500">
          {addedElements.map((element, index) => (
            <>
              <AddedInfo
                key={index}
                firstValue={element.firstValue}
                secondValue={element.secondValue}
                deleteInfo={() => deleteInfo(index)}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default EducationSectionCard;
