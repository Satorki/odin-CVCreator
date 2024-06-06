import { createContext, useState } from "react";
import generalInputsData from "../../assets/generalInputsData.json";

const InputsContext = createContext();

const InputsConnections = ({ children }) => {
  const [states, setStates] = useState(
    generalInputsData.map((info) => info.default)
  );

  const handleStateChange = (id, value) => {
    setStates((prevStates) => ({
      ...prevStates,
      [id]: value,
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