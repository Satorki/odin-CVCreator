import TitleApp from "../components/atoms/TitleApp";
import General from "../components/organisms/General";
import Experience from "../components/organisms/Experience";

function App() {
  return (
    <>
      <TitleApp />
      <div className="bg-gradient-to-r from-slate-600 to-slate-300">
      <General />
      <Experience />
      </div>
    </>
  );
}

export default App;
