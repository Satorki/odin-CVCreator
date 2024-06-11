import AppTitle from "../components/atoms/AppTitle";
import InfoSectionListing from "../components/organisms/InfoSectionListing";
import { InputsControl } from "../components/organisms/InputsControl";
import CvSectionListing from "../components/organisms/CvSectionListing";
import StylizationInfoCv from "../components/atoms/StylizationInfoCv";

function App() {
  return (
    <>
      <AppTitle />
      <InputsControl>
        <StylizationInfoCv>
          <InfoSectionListing />
          <CvSectionListing />
        </StylizationInfoCv>
      </InputsControl>
    </>
  );
}

export default App;
