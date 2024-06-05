import AppTitle from "../components/atoms/AppTitle";
import EducationCvSection from "../components/organisms/EducationCvSection";
import EducationInfoSection from "../components/organisms/EducationInfoSection";
// import ExperienceCvSection from "../components/organisms/ExperienceCvSection";
// import ExperienceInfoSection from "../components/organisms/ExperienceInfoSection";
import GeneralCvSection from "../components/organisms/GeneralCvSection";
import GeneralInfoSection from "../components/organisms/GeneralInfoSection";
import { InputsConnectionInfoCv } from "../components/organisms/InputsConnectionInfoCv";

function App() {
  return (
    <>
      <AppTitle />
      <InputsConnectionInfoCv>
        <div className="flex bg-gradient-to-r from-slate-600 to-slate-300">
          <div>
            <GeneralInfoSection />
            {/* <ExperienceInfoSection /> */}
            <EducationInfoSection />
          </div>
          <div className="bg-slate-100 flex-1 m-5 rounded-xl p-3 shadow-lg">
            <GeneralCvSection />
            {/* <ExperienceCvSection /> */}
            <EducationCvSection />
          </div>
        </div>
      </InputsConnectionInfoCv>
    </>
  );
}

export default App;
