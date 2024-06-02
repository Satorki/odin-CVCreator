import Title from "../components/atoms/Title";
import InputSection from "../components/organisms/InputSection";
import CvSection from "../components/organisms/CvSection"
import { useState } from "react";

function App() {

  const [cvData, setCvData] = useState()

  return (
    <>
      <Title />
      <section id="main" className="flex justify-between gap-10 pl-10 pr-10 bg-gradient-to-r from-slate-600 to-slate-300">
        <InputSection setCvData3={setCvData}/>
        <CvSection />
      </section>
    </>
  );
}

export default App;
