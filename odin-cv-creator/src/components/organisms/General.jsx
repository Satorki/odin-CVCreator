import GeneralInputs from "../molecules/GeneralInputs";
import GeneralTitle from "../atoms/GeneralTitle";

function General() {
  return (
    <div>
        <GeneralTitle />
        <GeneralInputs inputValue={"Name"} defaultValue={"Geralt"}/>
        <GeneralInputs inputValue={"Surname"} defaultValue={"from Riviia"}/>
        <GeneralInputs inputValue={"Email"} defaultValue={"geralt@rivia.tem"}/>
        <GeneralInputs inputValue={"Phone"} defaultValue={"001 002 003"}/>
    </div>
  );
}

export default General;
