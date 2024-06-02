import GeneralInfoForm from "../atoms/GeneralInfoForm";
import PropTypes from "prop-types";

function GeneralInfoOutput({cvData1}) {

  return (
    <div className="pt-3 flex gap-10 flex-col items-center">
      <div className="text-xl gap-5 flex items-center">
        <GeneralInfoForm
          firstData={cvData1}
          secondData="SurName"
          secondDataStyle="text-2xl"
        />
      </div>
      <div className="flex gap-5 border w-full justify-end">
        <GeneralInfoForm firstData="email@email.com" secondData="900-200-200" />
      </div>
      <div className="border-b-4 border-slate-900 w-full"></div>
    </div>
  );
}

GeneralInfoOutput.propTypes = {
  cvData1: PropTypes.string
};

export default GeneralInfoOutput;
