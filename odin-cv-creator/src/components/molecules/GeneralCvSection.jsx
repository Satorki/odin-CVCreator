import { useContext } from "react";
import CvText from "../atoms/CvText";
import { InputsContext } from "../organisms/InputsConnections";

const GeneralCvSection = () => {
  const { states } = useContext(InputsContext);

  return (
    <>
      <CvText outputValue={states[0]} />
      <CvText outputValue={states[1]} />
      <CvText outputValue={states[2]} prefixValue={"Email: "} />
      <CvText outputValue={states[3]} prefixValue={"Tel:"} />
    </>
  );
};

export default GeneralCvSection;

{
  // <CvText key={info.id} outputValue={states[info.id]} />
  /* <CvText outputValue={states[1]} />
      <CvText outputValue={states[2]} />
      <CvText prefixValue={"Email: "} outputValue={states[3]} />
      <CvText prefixValue={"Tel: "} outputValue={states[4]} /> */
}
