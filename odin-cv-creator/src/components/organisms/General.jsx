import { useState } from "react";
import TitleSection from "../atoms/TitleSection";
import TitleInputOutput from "../molecules/TitleInputOutput";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";

function General() {
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
        <TitleSection title={"General Information"}/>
        <div onClick={toggleHide}>
          {hide ? <HiChevronDoubleUp /> : <HiChevronDoubleDown />}
        </div>
      </div>
      <TitleInputOutput
        inputValue={"Name"}
        defaultValue={"Geralt"}
        inputShower={inputShower}
        textOutputClass={"bg-blue-200 text-xl text-center absolute top-10 right-10 rounded-t-lg w-3/5 pb-3 pt-4"}
      />
      <TitleInputOutput
        inputValue={"Surname"}
        defaultValue={"From Rivia"}
        inputShower={inputShower}
        textOutputClass={"bg-blue-200 text-2xl absolute top-20 right-10 w-3/5 text-right pr-48"}
      />
      <TitleInputOutput
        inputValue={"Email"}
        defaultValue={"geralt@rivia.com"}
        prefixValue={"Email: "}
        inputShower={inputShower}
        textOutputClass={"bg-blue-200 absolute top-28 pl-10 pb-10 right-10 w-3/5 pt-10"}
      />
      <TitleInputOutput
        inputValue={"Phone"}
        prefixValue={"tel: "}
        defaultValue={"123-456-789"}
        inputShower={inputShower}
        textOutputClass={"absolute text-right top-28 pl-10 pb-10 right-10 w-3/5 pt-10 pr-10 border-b-4 border-black"}
      />
    </div>
  );
}

export default General;
