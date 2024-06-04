import TitleSection from "../atoms/TitleSection";
import TitleInputOutput from "../molecules/TitleInputOutput";

function General() {
  return (
    <div>
        <TitleSection />
        <TitleInputOutput inputValue={"Name"} defaultValue={"Geralt"}/>
    </div>
  );
}

export default General;
