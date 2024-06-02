import ExpEduOutput from "../molecules/ExpEduOutput";
import GeneralInfoOutput from "../molecules/GeneralInfoOutput";
import PropsTypes from 'prop-types';

function CvSection({cvData2}) {
  return (
    <div className="flex flex-1 flex-col my-10 rounded-3xl bg-blue-100 shadow-2xl shadow-slate-700">
      <GeneralInfoOutput cvData1={cvData2}/>
      <ExpEduOutput />
    </div>
  );
}

GeneralInfoOutput.propTypes = {
  cvData2: PropTypes.string
};

export default CvSection;
