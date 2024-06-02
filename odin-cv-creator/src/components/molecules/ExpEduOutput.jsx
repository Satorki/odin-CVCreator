import ExpEduForm from "../atoms/ExpEduForm";
import GroupTitleForm from "../atoms/GroupTitleForm";

function ExperienceOutput() {
  return (
    <div className="flex justify-around">
      <div className="bg-slate-300 flex-1 p-5">
        <GroupTitleForm title={"Experience"} />
        <ExpEduForm
          firstParameter={"Company"}
          secondParameter={"position"}
          endDate={"01.05.2024"}
          startDate={"12.12.2019"}
        />
        <ExpEduForm
          firstParameter={"Company"}
          secondParameter={"position"}
          endDate={"01.05.2024"}
          startDate={"12.12.2019"}
        />
        </div>
        
        <div className="bg-slate-400 flex-1 p-5">
          <GroupTitleForm title={"Education"} />
          <ExpEduForm
            firstParameter={"PWSZ"}
            secondParameter={"IT spiecialist"}
            endDate={"07.05.2022"}
            startDate={"01.10.2018"}
          />
        </div>
    </div>
  );
}

export default ExperienceOutput;
