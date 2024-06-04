import { useState } from "react";
import TitleSection from "../atoms/TitleSection";
import TitleInputOutput from "../molecules/TitleInputOutput";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";

function General() {
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(prevHide => !prevHide);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between text-2xl ml-10 bg-blue-300 max-w-96 p-3 rounded-t-lg">
        <TitleSection />
        <div onClick={toggleHide}>
          {hide ? <HiChevronDoubleUp /> : <HiChevronDoubleDown />}
        </div>
      </div>
      <TitleInputOutput inputValue={"Name"} defaultValue={"Geralt"} />
      <TitleInputOutput inputValue={"Surname"} defaultValue={"From Rivia"} />
      <TitleInputOutput
        inputValue={"Email"}
        defaultValue={"geralt@rivia.com"}
      />
      <TitleInputOutput inputValue={"Phone"} defaultValue={"123-456-789"} />
    </div>
  );
}

export default General;
