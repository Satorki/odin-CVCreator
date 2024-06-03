import AppTitle from "../components/atoms/AppTitle";
import Education from "../components/organisms/Education";
import Experience from "../components/organisms/Experience";
import General from "../components/organisms/General";

function App() {
  return (
    <>
      <AppTitle />
      <section
        id="main"
        className="flex justify-between gap-10 pl-10 pr-10 bg-gradient-to-r from-slate-600 to-slate-300"
      >
        <General />
        {/* <Education />
        <Experience /> */}
      </section>
    </>
  );
}

export default App;
