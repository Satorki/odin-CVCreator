import { useState } from "react";
import TitleSection from "../atoms/TitleSection";
import TitleInputOutput from "../molecules/TitleInputOutput";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";

function Experience() {
  const [hide, setHide] = useState(false);
  const hideInput = "scale-0";
  const showInput = "scale-100";
  const inputShower = hide ? hideInput : showInput;

  const toggleHide = () => {
    setHide((prevHide) => !prevHide);
  };

  return (
    <div className="pt-10 pb-10 relative">
      <div className="flex justify-between text-2xl ml-10 bg-blue-300 max-w-96 p-3 rounded-t-lg ">
        <TitleSection title={"Experience"}/>
        <div onClick={toggleHide}>
          {hide ? <HiChevronDoubleUp /> : <HiChevronDoubleDown />}
        </div>
      </div>
      <TitleInputOutput
        inputValue={"Company Name"}
        defaultValue={"Kaer Morhen"}
        inputShower={inputShower}
        textOutputClass={"bg-blue-200 text-xl pl-10 absolute top-10 right-10 w-3/5 pb-3 pt-4"}
      />
      <TitleInputOutput
        inputValue={"Position"}
        defaultValue={"Witcher"}
        inputShower={inputShower}
        textOutputClass={"text-2xl absolute top-10 right-10 w-3/5 text-right pr-48 pt-3"}
      />
      <TitleInputOutput
        inputValue={"Date To"}
        defaultValue={"01.02.2003"}
        prefixValue={"To: "}
        inputShower={inputShower}
        textOutputClass={"bg-blue-200 absolute top-28 pl-10 pb-10 right-10 w-3/5 pt-10"}
      />
      <TitleInputOutput
        inputValue={"Date From"}
        prefixValue={"From: "}
        defaultValue={"01.02.1903"}
        inputShower={inputShower}
        textOutputClass={"absolute text-right top-28 pl-10 pb-10 right-10 w-3/5 pt-10 pr-10 border-b-4 border-black"}
      />
    </div>
  );
}

export default Experience;
