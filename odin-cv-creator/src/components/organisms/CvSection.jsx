import ExpEduOutput from "../molecules/ExpEduOutput";
import GeneralInfoOutput from "../molecules/GeneralInfoOutput";


function CvSection() {
  return (
    <div className="flex flex-1 flex-col my-10 rounded-3xl bg-blue-100 shadow-2xl shadow-slate-700">
      <GeneralInfoOutput/>
      <ExpEduOutput />
    </div>
  );
}


export default CvSection;
