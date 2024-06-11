import { createContext, useState } from "react";
import inputsData from "../../assets/inputsData.json";

const InputsContext = createContext();

const InputsControl = ({ children }) => {
  const initialState = {
    General: inputsData.General.map((info) => info.default),
  };

  const [states, setStates] = useState(initialState);

  const handleStateChange = (section, id, value) => {
    setStates((prevStates) => {
      const newSectionState = [...prevStates[section]];
      newSectionState[id] = value;
      return { ...prevStates, [section]: newSectionState };
    });
  };

  const [experienceList, setExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);

  return (
    <InputsContext.Provider
      value={{
        states,
        handleStateChange,
        experienceList,
        setExperienceList,
        educationList,
        setEducationList,
      }}
    >
      {children}
    </InputsContext.Provider>
  );
};

export { InputsControl, InputsContext };
