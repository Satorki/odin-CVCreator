import TextInputs from "../atoms/TextInputs";

function GeneralInputs() {
  return (
    <div>
      <TextInputs inputName={"Name"} defaultName={"Geralt"}/>
      <TextInputs inputName={"SurName"} defaultName={"From Rivia"} />
      <TextInputs inputName={"Email"} defaultName={"geralt@rivia.com"}/>
      <TextInputs inputName={"Phone"} defaultName={"007-008-009"}/>
    </div>
  );
}

export default GeneralInputs;

// import ExpEduForm from "../atoms/TextInputs";
// import GroupTitleForm from "../atoms/000 GroupTitleForm";

// function ExperienceOutput() {
//   return (
//     <div className="flex justify-around">
//       <div className="bg-slate-300 flex-1 p-5">
//         <GroupTitleForm title={"Experience"} />
//         <ExpEduForm
//           firstParameter={"Company"}
//           secondParameter={"position"}
//           endDate={"01.05.2024"}
//           startDate={"12.12.2019"}
//         />
//         <ExpEduForm
//           firstParameter={"Company"}
//           secondParameter={"position"}
//           endDate={"01.05.2024"}
//           startDate={"12.12.2019"}
//         />
//         </div>

//         <div className="bg-slate-400 flex-1 p-5">
//           <GroupTitleForm title={"Education"} />
//           <ExpEduForm
//             firstParameter={"PWSZ"}
//             secondParameter={"IT spiecialist"}
//             endDate={"07.05.2022"}
//             startDate={"01.10.2018"}
//           />
//         </div>
//     </div>
//   );
// }

// export default ExperienceOutput;
