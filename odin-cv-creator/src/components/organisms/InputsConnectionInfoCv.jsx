import { createContext, useState } from "react";

const InputsContext = createContext();

const InputsConnectionInfoCv = ({ children }) => {
  const [name, setName] = useState("Geralt");
  const [surname, setSurname] = useState("from Rivia");
  const [email, setEmail] = useState("geralt.rivia@temeria.com");
  const [phone, setPhone] = useState("123 456 789");

  return (
    <InputsContext.Provider
      value={{
        name,
        setName,
        surname,
        setSurname,
        email,
        setEmail,
        phone,
        setPhone,
      }}
    >
      {children}
    </InputsContext.Provider>
  );
};

export { InputsConnectionInfoCv, InputsContext };
