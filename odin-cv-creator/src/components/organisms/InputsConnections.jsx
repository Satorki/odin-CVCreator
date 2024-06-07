import { createContext, useState } from "react";
import inputsData from "../../assets/inputsData.json";

const InputsContext = createContext();

const InputsConnections = ({ children }) => {
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


  return (
    <InputsContext.Provider
      value={{
        states,
        handleStateChange,
      }}
    >
      {children}
    </InputsContext.Provider>
  );
};

export { InputsConnections, InputsContext };
