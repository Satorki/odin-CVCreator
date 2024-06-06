import AppTitle from "../components/atoms/AppTitle";
import InfoSectionListing from "../components/organisms/InfoSectionListing";
import { InputsConnections } from "../components/organisms/InputsConnections";
import CvSectionListing from "../components/organisms/CvSectionListing";
import StylizationInfoCv from "../components/atoms/StylizationInfoCv";

function App() {
  return (
    <>
      <AppTitle />
      <InputsConnections>
        <StylizationInfoCv>
          <InfoSectionListing />
          <CvSectionListing />
        </StylizationInfoCv>
      </InputsConnections>
    </>
  );
}

export default App;
