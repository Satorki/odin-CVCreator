import { createContext, useState } from "react";
import inputsData from "../../assets/inputsData.json";

const InputsContext = createContext();

const InputsConnections = ({ children }) => {
  const initialState = {
    General: inputsData.General.map((info) => info.default),
    Experiance: inputsData.Experience.map((info) => info.default),
    Education: inputsData.Education.map((info) => info.default),
  };

  const [states, setStates] = useState(initialState);

  const handleStateChange = (section, id, value) => {
    setStates((prevStates) => ({
      ...prevStates,
      [section]: prevStates[section].map((item, index) =>
        index === id ? value : item
      ),
    }));
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
