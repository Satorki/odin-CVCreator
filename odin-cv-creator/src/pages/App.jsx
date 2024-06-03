import AppTitle from "../components/atoms/AppTitle";
import General from "../components/organisms/General";

function App() {
  return (
    <>
      <AppTitle />
      <section        id="main"        className="p-10 bg-gradient-to-r from-slate-600 to-slate-300"      >
        <General />
      </section>
    </>
  );
}

export default App;
