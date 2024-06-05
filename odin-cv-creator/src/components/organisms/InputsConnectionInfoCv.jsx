import { createContext, useState } from "react";

const InputsContext = createContext();

const InputsConnectionInfoCv = ({ children }) => {
  const [name, setName] = useState("Geralt");
  const [surname, setSurname] = useState("from Rivia");
  const [email, setEmail] = useState("geralt.rivia@temeria.com");
  const [phone, setPhone] = useState("123 456 789");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [dateToCompany, setDateToCompany] = useState("");
  const [dateFromCompany, setDateFromCompany] = useState("");
  const [school, setSchool] = useState("KaerMorhen");
  const [specialization, setSpecialization] = useState("Witcher");
  const [dateToSchool, setDateToSchool] = useState("01.05.2024");
  const [dateFromSchool, setDateFromSchool] = useState("01.09.1900");

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
        company,
        setCompany,
        position,
        setPosition,
        dateToCompany,
        setDateToCompany,
        dateFromCompany,
        setDateFromCompany,
        school,
        setSchool,
        specialization,
        setSpecialization,
        dateToSchool,
        setDateToSchool,
        dateFromSchool,
        setDateFromSchool
      }}
    >
      {children}
    </InputsContext.Provider>
  );
};

export { InputsConnectionInfoCv, InputsContext };
