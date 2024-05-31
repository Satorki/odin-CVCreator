import Title from "../components/atoms/Title";
import InputSection from "../components/organisms/InputSection";
import CvSection from "../components/organisms/CvSection"

function App() {
  return (
    <>
      <Title />
      <section id="main" className="flex ml-10">
        <InputSection />
        <CvSection />
      </section>
    </>
  );
}

export default App;
